/**
 * Post-build prerender: snapshot fully rendered HTML per route so crawlers
 * that only read the first response get the correct <title>, canonical, and
 * body content (not an empty #root).
 *
 * - Local / CI: full `puppeteer` (bundled Chrome) or PUPPETEER_EXECUTABLE_PATH.
 * - Vercel: `puppeteer-core` + `@sparticuz/chromium` (no system libnspr/nss on build image).
 *
 * Skip with SKIP_PRERENDER=1.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'
import { ALL_PRERENDER_PATHS } from '../src/data/seoPrerenderRoutes.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const port = 4179
const origin = `http://127.0.0.1:${port}`

const isVercel = process.env.VERCEL === '1'

async function launchBrowser() {
  const baseArgs = ['--no-sandbox', '--disable-setuid-sandbox']

  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    const puppeteer = (await import(isVercel ? 'puppeteer-core' : 'puppeteer')).default
    return puppeteer.launch({
      headless: true,
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: baseArgs,
    })
  }

  if (isVercel) {
    const puppeteer = (await import('puppeteer-core')).default
    const chromium = (await import('@sparticuz/chromium')).default
    const executablePath = await chromium.executablePath()
    return puppeteer.launch({
      args: [...chromium.args, ...baseArgs],
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    })
  }

  const { default: puppeteer } = await import('puppeteer')
  const common = { headless: true, args: baseArgs }
  try {
    return await puppeteer.launch({ ...common, channel: 'chrome' })
  } catch {
    return puppeteer.launch(common)
  }
}

function outFileForRoute(route) {
  if (route === '/' || route === '') return join(dist, 'index.html')
  const clean = route.replace(/^\//, '')
  return join(dist, clean, 'index.html')
}

function waitForServer(ms = 90000) {
  const start = Date.now()
  return new Promise((resolve, reject) => {
    const tick = () => {
      fetch(origin + '/')
        .then((r) => {
          if (r.ok) resolve()
          else if (Date.now() - start > ms) reject(new Error('Preview server not ready'))
          else setTimeout(tick, 300)
        })
        .catch(() => {
          if (Date.now() - start > ms) reject(new Error('Preview server not ready'))
          else setTimeout(tick, 300)
        })
    }
    tick()
  })
}

async function main() {
  if (process.env.SKIP_PRERENDER === '1') {
    console.info('[prerender] SKIP_PRERENDER=1 — skipping')
    return
  }

  if (!isVercel) {
    try {
      await import('puppeteer')
    } catch {
      console.error(
        '[prerender] Missing or broken "puppeteer" package. From client/: run `npm install`, then `npm run build` again.',
      )
      process.exit(1)
    }
  } else {
    try {
      await import('puppeteer-core')
      await import('@sparticuz/chromium')
    } catch {
      console.error(
        '[prerender] Vercel build needs puppeteer-core and @sparticuz/chromium. From client/: run `npm install`.',
      )
      process.exit(1)
    }
  }

  const child = spawn('npx', ['vite', 'preview', '--port', String(port), '--strictPort'], {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: process.env,
  })

  try {
    await waitForServer()
    console.info('[prerender] Preview up, launching browser…')

    const browser = await launchBrowser()
    const page = await browser.newPage()

    for (const route of ALL_PRERENDER_PATHS) {
      const url = route === '/' ? `${origin}/` : `${origin}${route}`
      process.stdout.write(`[prerender] ${url}\n`)
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 120000 })
      await page.waitForFunction(
        () => {
          const rootEl = document.getElementById('root')
          return rootEl && rootEl.childElementCount > 0
        },
        { timeout: 20000 },
      )
      const html = await page.content()
      const out = outFileForRoute(route)
      mkdirSync(dirname(out), { recursive: true })
      writeFileSync(out, html, 'utf8')
    }

    await browser.close()
    console.info('[prerender] Done.')
  } finally {
    child.kill('SIGTERM')
  }
}

main().catch((err) => {
  console.error('[prerender]', err)
  process.exit(1)
})
