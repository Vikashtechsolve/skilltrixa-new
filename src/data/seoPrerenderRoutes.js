/**
 * Paths to prerender after `vite build` (HTML snapshot per URL for crawlers)
 * and to list in sitemap.xml. Keep static routes in sync with App.jsx.
 */

import { ALL_BLOGS } from './blogPosts.js'

export const STATIC_SEO_ROUTES = [
  '/',
  '/programs',
  '/programs/full-stack',
  '/programs/data-science',
  '/programs/ai-ml',
  '/programs/gen-ai',
  '/programs/aptitude-training',
  '/programs/competitive-coding',
  '/universities',
  '/about',
  '/contact-us',
  '/blogs',
  '/privacy-policy',
  '/terms-of-service',
]

export const ALL_PRERENDER_PATHS = [
  ...STATIC_SEO_ROUTES,
  ...ALL_BLOGS.map((b) => `/blogs/${b.id}`),
]
