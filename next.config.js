/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if your GitHub Pages site is not at the root
  // For example, if your repo is username.github.io/repo-name, set:
  // basePath: '/repo-name',
  // trailingSlash: true,
}

module.exports = nextConfig

