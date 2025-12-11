/** @type {import('next').NextConfig} */
const isTauriBuild = process.env.NEXT_PUBLIC_TAURI_BUILD === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: isTauriBuild ? 'export' : 'standalone',
  images: {
    unoptimized: isTauriBuild, // Tauri doesn't support Next.js image optimization
  },
}

module.exports = nextConfig
