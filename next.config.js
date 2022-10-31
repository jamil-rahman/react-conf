/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "www.reason-conf.com", "api.react-finland.fi"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
