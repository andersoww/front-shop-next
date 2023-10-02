const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  register: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_URL_PUBLIC_URL,
  },
};

module.exports = withPWA(nextConfig);
