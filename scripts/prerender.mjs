/**
 * Post-build prerender: snapshot fully rendered HTML per route so crawlers
 * that only read the first response get the correct <title>, canonical, and
 * body content (not an empty #root).
 *
 * Requires: npm install (puppeteer). Skip with SKIP_PRERENDER=1.
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

async function launchBrowser(puppeteer) {
  const common = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  }
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return puppeteer.launch({
      ...common,
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    })
  }
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

  let puppeteer
  try {
    ;({ default: puppeteer } = await import('puppeteer'))
  } catch {
    console.error(
      '[prerender] Missing or broken "puppeteer" package. From client/: run `rm -rf node_modules && npm install`, then `npm run build` again.',
    )
    process.exit(1)
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

    const browser = await launchBrowser(puppeteer)
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
