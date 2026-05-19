import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ALL_PRERENDER_PATHS } from './src/data/seoPrerenderRoutes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

import { resolveCanonicalSiteOrigin } from './src/config/canonicalOrigin.js'

function resolveSiteUrl(mode) {
  const env = loadEnv(mode, process.cwd(), '')
  return resolveCanonicalSiteOrigin(env.VITE_SITE_URL)
}

/** Write sitemap.xml + robots.txt into dist/ using the canonical SITE_URL. */
function seoDistFilesPlugin(siteUrl) {
  return {
    name: 'seo-dist-files',
    closeBundle() {
      const base = siteUrl.replace(/\/$/, '')
      const lastmod = new Date().toISOString().slice(0, 10)
      const urlEntries = ALL_PRERENDER_PATHS.map((route) => {
        const loc = route === '/' ? `${base}/` : `${base}${route}`
        const priority =
          route === '/'
            ? '1.0'
            : route.startsWith('/programs/')
              ? '0.9'
              : route === '/programs' || route === '/universities'
                ? '0.9'
                : '0.7'
        const changefreq = route === '/' || route === '/blogs' ? 'weekly' : 'monthly'
        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
      }).join('\n')

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`
      const robots = `# https://www.robotstxt.org/robotstxt.html\nUser-agent: *\nAllow: /\n\nDisallow: /api/\nDisallow: /*?*utm_\n\nSitemap: ${base}/sitemap.xml\n`

      const distDir = path.resolve(__dirname, 'dist')
      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8')
      fs.writeFileSync(path.join(distDir, 'robots.txt'), robots, 'utf8')
    },
  }
}

// https://vite.dev/config/chaining - use function form for mode-aware env
export default defineConfig(({ mode }) => {
  const siteUrl = resolveSiteUrl(mode)

  return {
    plugins: [
      react(),
      {
        name: 'inject-site-url-html',
        transformIndexHtml(html) {
          return html.replace(/__SITE_URL__/g, siteUrl)
        },
      },
      seoDistFilesPlugin(siteUrl),
      {
        name: 'favicon-no-cache-dev',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url ?? ''
            if (
              url.includes('skilltrixa.svg') ||
              url.includes('skilltrixa-favicon') ||
              url.includes('favicon')
            ) {
              res.setHeader('Cache-Control', 'no-store, max-age=0')
            }
            next()
          })
        },
      },
    ],
  }
})
