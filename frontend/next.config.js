/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LOGIN_API: process.env.LOGIN_API,
  },
};

module.exports = nextConfig;
