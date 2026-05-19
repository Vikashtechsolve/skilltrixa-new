/**
 * Backend API base URL — set VITE_API_URL in frontend/.env
 * (e.g. http://localhost:5000/api for local dev; production URL in .env.production).
 * Include the /api path prefix; no trailing slash.
 */
function resolveApiBase() {
  const raw = import.meta.env.VITE_API_URL
  if (typeof raw !== 'string' || !raw.trim()) {
    throw new Error(
      'VITE_API_URL is not set. Add it to frontend/.env (e.g. VITE_API_URL=http://localhost:5000/api).'
    )
  }
  return raw.trim().replace(/\/$/, '')
}

export const API_BASE = resolveApiBase()
