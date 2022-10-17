/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  crossOrigin: "anonymous",
};

module.exports = nextConfig;
