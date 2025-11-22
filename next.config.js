/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds, not for development
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  // Use basePath only for GitHub Pages builds (set via NEXT_PUBLIC_GITHUB_PAGES env var)
  // For local development, basePath is empty so the site works at http://localhost:3000
  basePath: process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/flexusnet' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

