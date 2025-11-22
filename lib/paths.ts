/**
 * Base path constant - matches the logic in next.config.js
 * This is set at build time based on the NEXT_PUBLIC_GITHUB_PAGES environment variable
 * Using NEXT_PUBLIC_ prefix so it's available in client components
 */
const BASE_PATH = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/flexusnet' : ''

/**
 * Get the full path for an asset (image, etc.)
 * Automatically prepends basePath when needed for GitHub Pages
 * 
 * @param path - The asset path (e.g., '/image.png' or 'image.png')
 * @returns The full path with basePath prepended if needed
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${normalizedPath}`
}

/**
 * Get the base path
 */
export function getBasePath(): string {
  return BASE_PATH
}

