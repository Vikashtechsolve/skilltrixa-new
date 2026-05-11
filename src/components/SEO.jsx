import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  SITE_NAME,
  SITE_URL,
  SITE_LOCALE,
  SITE_DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  absUrl,
} from '../config/seo'

/** Canonical origin — always https://www.skilltrixa.com (apex env → www; see canonicalOrigin.js). */
const BASE_URL = SITE_URL

function withCanonicalOrigin(pathnameAndSearch) {
  const p = pathnameAndSearch.startsWith('/')
    ? pathnameAndSearch
    : `/${pathnameAndSearch}`
  return `${BASE_URL}${p}`
}

function resolveImage(image) {
  return absUrl(image || SITE_DEFAULT_OG_IMAGE)
}

/**
 * Route-level document metadata (replaces imperative useSeo).
 * Pass `path` for canonical / og:url; omit to use current location (pathname + search).
 */
export default function SEO({
  title,
  description,
  keywords,
  path,
  image,
  type = 'website',
  jsonLd,
  noindex = false,
}) {
  const location = useLocation()
  const url = path
    ? withCanonicalOrigin(path.startsWith('/') ? path : `/${path}`)
    : withCanonicalOrigin(`${location.pathname || '/'}${location.search || ''}`)
  const ogImage = resolveImage(image)

  const jsonLdList = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean)
    : []

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1'
        }
      />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={SITE_LOCALE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={ogImage} />

      {jsonLdList.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  )
}
