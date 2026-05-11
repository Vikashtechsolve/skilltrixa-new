/**
 * Canonical public origin for Skilltrixa marketing site.
 * Apex `https://skilltrixa.com` is always normalized to `https://www.skilltrixa.com`
 * so canonicals / OG / JSON-LD / sitemap match the Vercel 301 target.
 */
const FALLBACK = 'https://www.skilltrixa.com'

export function resolveCanonicalSiteOrigin(envValue) {
  const trimmed = String(envValue ?? '').trim()
  if (!trimmed) return FALLBACK.replace(/\/$/, '')

  const raw = trimmed.replace(/\/$/, '')
  try {
    const withProto = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
    const u = new URL(withProto)
    if (u.hostname.toLowerCase() === 'skilltrixa.com') {
      u.hostname = 'www.skilltrixa.com'
    }
    if (u.hostname.toLowerCase() === 'www.skilltrixa.com') {
      u.protocol = 'https:'
    }
    return u.origin.replace(/\/$/, '')
  } catch {
    return FALLBACK.replace(/\/$/, '')
  }
}

/** If an absolute URL is on apex skilltrixa.com, rewrite to https://www… */
export function absolutizeSkilltrixaHost(urlString) {
  if (!urlString || typeof urlString !== 'string') return urlString
  if (!/^https?:\/\//i.test(urlString)) return urlString
  try {
    const u = new URL(urlString)
    if (u.hostname.toLowerCase() !== 'skilltrixa.com') return urlString
    u.hostname = 'www.skilltrixa.com'
    u.protocol = 'https:'
    return u.href
  } catch {
    return urlString
  }
}
