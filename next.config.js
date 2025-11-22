/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/flexusnet',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

