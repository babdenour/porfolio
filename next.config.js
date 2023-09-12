/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.licdn.com',
      },
    ],
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
