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
        pathname: '/bot/2023-snow2-crop.jpeg',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jaybots.org',
        port: '',
        pathname: '/bot/p-2023.jpeg',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jaybots.org',
        port: '',
        pathname: '/bot/2022.jpeg',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jaybots.org',
        port: '',
        pathname: '/bot/b-2022.jpeg',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jaybots.org',
        port: '',
        pathname: '/bot/2021.jpg',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jaybots.org',
        port: '',
        pathname: '/bot/2020.jpg',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jaybots.org',
        port: '',
        pathname: '/bot/2019.jpg',
      },
    ]
  }
}
