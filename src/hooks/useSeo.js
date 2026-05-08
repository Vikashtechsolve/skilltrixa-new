import { useEffect } from 'react'
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  SITE_DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  absUrl,
} from '../config/seo'

/**
 * Set or update a <meta name="..."> tag in document head.
 * Tags managed by this hook are marked with data-seo="1" so we never
 * accidentally overwrite hand-written SSR/index.html metadata.
 */
function upsertMetaName(name, content) {
  if (content == null || content === '') return
  let el = document.head.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    el.setAttribute('data-seo', '1')
    document.head.appendChild(el)
  }
  el.setAttribute('content', String(content))
}

function upsertMetaProperty(property, content) {
  if (content == null || content === '') return
  let el = document.head.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    el.setAttribute('data-seo', '1')
    document.head.appendChild(el)
  }
  el.setAttribute('content', String(content))
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    el.setAttribute('data-seo', '1')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(items) {
  document.head
    .querySelectorAll('script[type="application/ld+json"][data-seo-jsonld="1"]')
    .forEach((n) => n.remove())
  if (!items) return
  const list = Array.isArray(items) ? items : [items]
  for (const item of list) {
    if (!item) continue
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.setAttribute('data-seo-jsonld', '1')
    s.text = JSON.stringify(item)
    document.head.appendChild(s)
  }
}

function resolveImage(image) {
  const src = image || SITE_DEFAULT_OG_IMAGE
  return absUrl(src)
}

/**
 * useSeo — declarative per-page SEO for an SPA.
 *
 * @param {object} opts
 * @param {string}  opts.title       Page <title> (also used for og:title / twitter:title)
 * @param {string}  opts.description meta description (also og/twitter)
 * @param {string=} opts.keywords    optional meta keywords
 * @param {string=} opts.path        site path (e.g. "/programs/full-stack"); used for canonical + og:url
 * @param {string=} opts.image       OG/Twitter image (path or absolute URL); falls back to default
 * @param {string=} opts.type        og:type, defaults to "website" (use "article" for blogs)
 * @param {object|object[]=} opts.jsonLd  one or more JSON-LD objects to inject
 * @param {boolean=} opts.noindex    if true, sets robots = noindex,nofollow
 */
export function useSeo({
  title,
  description,
  keywords,
  path,
  image,
  type = 'website',
  jsonLd,
  noindex = false,
} = {}) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : ''
  useEffect(() => {
    if (typeof document === 'undefined') return

    const url = path
      ? absUrl(path)
      : typeof window !== 'undefined'
      ? window.location.href
      : SITE_URL
    const ogImage = resolveImage(image)

    if (title) document.title = title

    upsertMetaName('description', description)
    if (keywords) upsertMetaName('keywords', keywords)
    upsertMetaName(
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
    )
    upsertLink('canonical', url)

    upsertMetaProperty('og:type', type)
    upsertMetaProperty('og:site_name', SITE_NAME)
    upsertMetaProperty('og:title', title)
    upsertMetaProperty('og:description', description)
    upsertMetaProperty('og:url', url)
    upsertMetaProperty('og:image', ogImage)
    upsertMetaProperty('og:locale', SITE_LOCALE)

    upsertMetaName('twitter:card', 'summary_large_image')
    upsertMetaName('twitter:site', TWITTER_HANDLE)
    upsertMetaName('twitter:title', title)
    upsertMetaName('twitter:description', description)
    upsertMetaName('twitter:image', ogImage)

    setJsonLd(jsonLd)
  }, [title, description, keywords, path, image, type, noindex, jsonLdKey])
}
