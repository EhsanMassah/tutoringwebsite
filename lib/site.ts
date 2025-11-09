const FALLBACK_SITE_URL = 'https://cftutoring.com'

export const SITE_URL =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  FALLBACK_SITE_URL

export const metadataBase =
  (() => {
    try {
      return new URL(SITE_URL)
    } catch {
      return undefined
    }
  })()
