import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.SITE_URL || 'https://example.com'

  const routes = [
    '/',
    '/about',
    '/subjects',
    '/pricing',
    '/contact',
    '/blog'
  ]

  const urls = routes.map((r) => `
    <url>
      <loc>${baseUrl}${r}</loc>
      <changefreq>weekly</changefreq>
    </url>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`

  return new NextResponse(xml, { status: 200, headers: { 'Content-Type': 'application/xml' } })
}
