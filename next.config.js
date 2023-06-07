/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.my.ge',
      },
    ],
  },
};

module.exports = nextConfig;
