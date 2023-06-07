/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jaybots.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'jaybots.org',
        port: '',
      },
    ]
  }
}
