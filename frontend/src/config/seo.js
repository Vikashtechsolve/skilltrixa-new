/**
 * Central SEO configuration for Skilltrixa.
 *
 * Set VITE_SITE_URL in `.env` / `.env.production` to your canonical origin
 * (team standard: https://www.skilltrixa.com). Apex → www should be a 301 at
 * the host (see vercel.json). All canonicals, OG URLs, JSON-LD and prerender
 * output use this value.
 *
 * NOTE: replace /skilltrixa.png with a 1200x630 social-share image when you
 * have one. The current file works as a fallback but is larger than ideal.
 */
import { resolveCanonicalSiteOrigin, absolutizeSkilltrixaHost } from './canonicalOrigin.js'

const envSite =
  typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL
    ? String(import.meta.env.VITE_SITE_URL)
    : undefined

/** Always https://www.skilltrixa.com (apex env values normalized — matches vercel.json 301). */
export const SITE_URL = resolveCanonicalSiteOrigin(envSite)
export const SITE_NAME = 'Skilltrixa'
export const SITE_TAGLINE = 'Learn skills. Get job ready.'
export const SITE_LOCALE = 'en_IN'
export const SITE_LANG = 'en'

export const SITE_DEFAULT_TITLE = 'Skilltrixa | Learn Skills. Get Job Ready.'
export const SITE_DEFAULT_DESCRIPTION =
  'Skilltrixa is a training and placement institute offering practical programs in Full Stack Development, Data Science, AI and ML, and Generative AI, with mentor support and real projects.'
export const SITE_DEFAULT_KEYWORDS =
  'Skilltrixa, training institute, placement training, full stack course, data science course, AI ML course, generative AI course, university partnership, skill development'

export const SITE_DEFAULT_OG_IMAGE = '/skilltrixa.png'

export const TWITTER_HANDLE = '@Skilltrixa01'

export const CONTACT = {
  email: 'support@skilltrixa.com',
  phone: '+91 98765 43210',
  phoneE164: '+919876543210',
  address: {
    streetAddress:
      '423, Floor 4, Phoenix Resicom, Waghodia Rd, Near Vaikunth Char Rasta, Madhavpura',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    postalCode: '390019',
    addressCountry: 'IN',
  },
}

/** Drop non-public URLs (e.g. admin dashboards) from schema.org sameAs. */
export function filterPublicSameAs(urls) {
  if (!urls?.length) return []
  return urls.filter(
    (u) => typeof u === 'string' && u.trim() && !/\badmin\b/i.test(u) && !/\/admin(?:\/|$)/i.test(u),
  )
}

/** Public profile URLs only — curate here; filterPublicSameAs is a safety net. */
export const SOCIAL_PROFILES = [
  'https://www.instagram.com/skilltrixa/',
  'https://x.com/Skilltrixa01',
  'https://www.facebook.com/profile.php?id=61564535232602',
  'https://www.linkedin.com/company/113245218/',
  'https://www.youtube.com/channel/UCV3E1SHQNFEnbiwl0Sre0AQ',
]

/** Build an absolute URL from a path or absolute URL. */
export function absUrl(pathOrUrl) {
  if (!pathOrUrl) return SITE_URL
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return absolutizeSkilltrixaHost(pathOrUrl)
  }
  const base = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL
  const p = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${base}${p}`
}

/* ───────────────── JSON-LD builders ───────────────── */

/** Site-wide Organization (HomepageSchema + Course provider @id). */
export const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'SkillTrixa',
  url: `${SITE_URL}/`,
  logo: absUrl('/skilltrixa.png'),
  email: CONTACT.email,
  telephone: CONTACT.phone,
  sameAs: filterPublicSameAs(SOCIAL_PROFILES),
  address: {
    '@type': 'PostalAddress',
    ...CONTACT.address,
  },
  description: SITE_DEFAULT_DESCRIPTION,
}

/** Site-wide WebSite (no SearchAction until /blogs?q= is prerendered with real result HTML for crawlers). */
export const WEBSITE_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: SITE_LANG,
  publisher: { '@id': `${SITE_URL}/#organization` },
}

/** Build a BreadcrumbList from an ordered list of { name, path }. */
export function buildBreadcrumbsLd(items) {
  if (!items || !items.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  }
}

/** Build a Course JSON-LD from a Skilltrixa program data object + path. */
export function buildCourseLd(program, path) {
  if (!program) return null
  const url = absUrl(path)
  const priceNumber = (program.fee?.price || '').replace(/[^\d.]/g, '') || undefined
  const startDateIso = parseProgramStartDate(program.hero?.batchDate)
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.meta?.title?.replace(/\s*\|\s*Skilltrixa.*$/i, '') || program.meta?.title,
    description: program.meta?.description,
    url,
    provider: { '@id': `${SITE_URL}/#organization` },
    image: program.hero?.images?.[0] ? absUrl(program.hero.images[0]) : absUrl(SITE_DEFAULT_OG_IMAGE),
    educationalLevel: 'Beginner to Advanced',
    inLanguage: SITE_LANG,
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'Blended',
        ...(startDateIso ? { startDate: startDateIso } : {}),
        instructor: { '@id': `${SITE_URL}/#organization` },
        location: {
          '@type': 'VirtualLocation',
          url,
        },
      },
    ],
    ...(priceNumber
      ? {
          offers: {
            '@type': 'Offer',
            price: priceNumber,
            priceCurrency: 'INR',
            category: 'Paid',
            url,
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  }
}

/** Build an FAQPage JSON-LD from a program's FAQ tabs (overview, macro, ...). */
export function buildFaqLd(faq) {
  if (!faq?.data) return null
  const all = []
  for (const tabId of Object.keys(faq.data)) {
    for (const qa of faq.data[tabId] || []) {
      if (!qa?.q || !qa?.a) continue
      all.push({
        '@type': 'Question',
        name: qa.q,
        acceptedAnswer: { '@type': 'Answer', text: qa.a },
      })
    }
  }
  if (!all.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: all,
  }
}

/** Build an ItemList JSON-LD from an array of { name, path, description? }. */
export function buildItemListLd(name, items) {
  if (!items?.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: absUrl(item.path),
      ...(item.description ? { description: item.description } : {}),
    })),
  }
}

/** Build an Article JSON-LD from a Skilltrixa blog post + path. */
export function buildArticleLd(blog, path) {
  if (!blog) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image ? absUrl(blog.image) : absUrl(SITE_DEFAULT_OG_IMAGE),
    datePublished: blog.date,
    dateModified: blog.date,
    author: { '@type': 'Organization', name: blog.author || SITE_NAME, url: `${SITE_URL}/` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absUrl(path) },
    keywords: Array.isArray(blog.tags) ? blog.tags.join(', ') : undefined,
    inLanguage: SITE_LANG,
  }
}

/* "8th June 2026" → "2026-06-08", best-effort, returns undefined if it can't parse. */
function parseProgramStartDate(label) {
  if (!label || typeof label !== 'string') return undefined
  const months = {
    january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
    july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
  }
  const m = label.toLowerCase().match(/(\d{1,2})\w*\s+([a-z]+)\s+(\d{4})/)
  if (!m) return undefined
  const day = m[1].padStart(2, '0')
  const month = months[m[2]]
  const year = m[3]
  if (!month) return undefined
  return `${year}-${month}-${day}`
}
