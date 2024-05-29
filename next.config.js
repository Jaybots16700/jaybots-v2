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
        hostname: 'thecommencementgroup.com',
        port: '',
        pathname: '/wp-content/uploads/2016/09/NEW-JJHS-LOGO.gif',
      },
      {
        protocol: 'https',
        hostname: 'i.redd.it',
        port: '',
        pathname: '/iblf4hi92vt21.png',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        pathname:
          '/media/774e05_217a89f68e9a4d7abcdd136187700655~mv2.png/v1/crop/x_37,y_29,w_436,h_438/fill/w_440,h_444,al_c,lg_1,q_85,enc_auto/roverruckus_first_w.png',
      },
      {
        protocol: 'https',
        hostname: 'hightechkids.org',
        port: '',
        pathname:
          '/wp-content/uploads/Graphics/ChallengeLogos/FTCChallengeLogos/2020_UltimateGoal.2_web.png',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/**',
      },
      {
        protocol: 'https',
        hostname: 'www.wappingersschools.org',
        port: '',
        pathname:
          '/cms/lib/NY01001463/Centricity/Template/GlobalAssets/images///logos/Wappingers_Logo_NEW_Blue_Red.png',
      },
      {
        protocol: 'https',
        hostname: 'jaybotsboosters.org',
        port: '',
      },
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
      {
        protocol: 'https',
        hostname: 'file.coffee',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/calendar', destination: '/events', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      {
        source: '/interest',
        destination: 'https://interest.jaybots.org',
        permanent: true,
      },
      {
        source: '/map',
        destination: 'https://jjmap.jaybots.org?utm_source=map',
        permanent: true,
      },
      {
        source: '/sponsor',
        destination: 'https://jaybotsboosters.org/sponsor',
        permanent: true,
      },
      {
        source: '/booster',
        destination: 'https://jaybotsboosters.org',
        permanent: true,
      },
      {
        source: '/boosters',
        destination: 'https://jaybotsboosters.org/sponsor',
        permanent: true,
      },
      {
        source: '/future',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLScvvh-qjktMwAG-kV_bLgKI9k7hHXBpkBfAvVAdLLx2Yh6LNA/viewform',
        permanent: true,
      },
      {
        source: '/3dprint',
        destination: 'https://tally.so/r/wa4Xgv',
        permanent: true,
      },
      {
        source: '/3dprints',
        destination: 'https://tally.so/r/wa4Xgv',
        permanent: true,
      },
      {
        source: '/3dprinting',
        destination: 'https://tally.so/r/wa4Xgv',
        permanent: true,
      },
      { source: '/competition', destination: '/host', permanent: true },
      { source: '/tournament', destination: '/host', permanent: true },
      {
        source: '/anish',
        destination: 'https://stanford.edu/~anishan',
        permanent: true,
      },
      {
        source: '/live1',
        destination: 'https://youtube.com/live/cgTtU3hFGZ4?feature=share',
        permanent: true,
      },
      {
        source: '/live2',
        destination: 'https://youtube.com/live/Hp6LtIeRqfo?feature=share',
        permanent: true,
      },
    ]
  },
}
