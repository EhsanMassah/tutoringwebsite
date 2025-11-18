/** @type {import('next').NextConfig} */
const ASSET_CACHE_HEADERS = [
  {
    source: '/:all*(svg|png|jpg|jpeg|gif|ico|webp|avif)',
    headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
  },
]

const nextConfig = {
  reactStrictMode: true,
  images: {
    // update with domains you'll use for images
    domains: ['images.unsplash.com'],
  },
  async headers() {
    return ASSET_CACHE_HEADERS
  },
}

module.exports = nextConfig
