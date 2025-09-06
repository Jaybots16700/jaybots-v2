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
      { protocol: 'https', hostname: 'jaybotsboosters.org', port: '' },
      { protocol: 'https', hostname: 'cdn.jaybots.org', port: '' },
      { protocol: 'https', hostname: 'jaybots.org', port: '' },
      { protocol: 'http', hostname: 'via.placeholder.com', port: '' },
      { protocol: 'https', hostname: 'res.cloudinary.com', port: '' },
      { protocol: 'https', hostname: 'file.coffee', port: '' },
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
        source: '/interest-form',
        destination: 'https://forms.gle/3oMMDQMRcBLNkHLS9',
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
        destination: 'https://forms.gle/JGJ7nCrhmSZZGSpD7',
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
      {
        source: '/chocolate',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSd7pikwAvxheTNUQPVHlbxPmSeLhZQ2tcXXFuD10gx_ldz9hg/viewform?usp=dialog',
        permanent: true,
      },
      {
        source: '/anish',
        destination: 'https://stanford.edu/~anishan',
        permanent: true,
      },
      {
        source: '/live1',
        destination: 'https://youtube.com/live/_CGLcrJBpoU?feature=share',
        permanent: true,
      },
      /*{
        source: '/stream',
        destination: 'https://www.twitch.tv/fuzion_panda1',
        permanent: false,
      },*/
      {
        source: '/live2',
        destination: 'https://youtube.com/live/Hp6LtIeRqfo?feature=share',
        permanent: true,
      },

      {
        source: '/live',
        destination: 'https://excelsiorny.org/live',
        permanent: true,
      },
      {
        source: '/workshops',
        destination:
          'https://docs.google.com/forms/d/17Ix3rWJQmDbYFauEUhPRZVeRvbajg0zkUcozukiefak/edit',
        permanent: false,
      },
      {
        source: '/lego-workshop',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSdCgte7Pf1QtLCw-dXJ0EzrblBO0efNgBYD8ta5xvFewAL8Yg/viewform',
        permanent: false,
      },
      {
        source: '/easter',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSemoKYomIww-RSQqI2XTSENSCozCFOBpc-sn8ia2KsaN5UbwQ/viewform',
        permanent: false,
      },

      { source: '/competition', destination: '/host', permanent: true },
      { source: '/tournament', destination: '/host', permanent: true },
      { source: '/qualifier', destination: '/host', permanent: true },

      {
        source: '/host',
        destination:
          'https://sites.google.com/wcsdny.org/john-jay-high-school-robotics-/home',
        permanent: true,
      },
      {
        source: '/volunteer',
        destination:
          'https://sites.google.com/wcsdny.org/john-jay-high-school-robotics-/volunteer-information',
        permanent: true,
      },
      {
        source: '/lunch-order',
        destination: 'https://tally.so/r/3j0gL4',
        permanent: true,
      },
      {
        source: '/valentines',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSdZMIad2OoW1l6yivsEPMrp1pvzasVhzguFHw1Qh4-sR8kpYw/viewform?usp=dialog',
        permanent: false,
      },
      {
        source: '/chocolate-workshop',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSealF8yrFbl9zushCGLDbdX9IznqXDnRQbV72e0BaEMAKgNRg/viewform?',
        permanent: false,
      },
      {
        source: '/practice',
        destination: 'https://youtube.com/shorts/U5X9nA4jx2Q?feature=share',
        permanent: false,
      },
      {
        source: '/fund-worlds',
        destination:
          'https://www.gofundme.com/f/support-jaybots-journey-to-world-championships?qid=1e5af4b43383261eb074eaae1d40e1ee',
        permanent: true,
      },
      {
        source: '/join',
        destination: 'https://tally.so/r/w4LZ5k',
        permanent: true,
      },
      {
        source: '/highlights',
        destination: 'https://www.youtube.com/watch?v=j7EjCXyEqos',
        permanent: true,
      },
    ]
  },
}
