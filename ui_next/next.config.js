/** @type {import('next').NextConfig} */
const isTauriBuild = process.env.NEXT_PUBLIC_TAURI_BUILD === 'true';
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';

// GitHub Pages deployment configuration
const repoName = 'NexPyRS'; // Your repository name
const basePath = isGitHubPages ? `/${repoName}` : '';

console.log('Build Configuration:');
console.log('- isTauriBuild:', isTauriBuild);
console.log('- isGitHubPages:', isGitHubPages);
console.log('- basePath:', basePath);

const nextConfig = {
  reactStrictMode: true,
  output: (isTauriBuild || isGitHubPages) ? 'export' : 'standalone',

  // GitHub Pages requires basePath when deploying to repo (not user site)
  basePath: basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: (isTauriBuild || isGitHubPages), // Static export doesn't support image optimization
  },

  // Disable trailing slashes for better GitHub Pages compatibility
  trailingSlash: true,
}

module.exports = nextConfig
