/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { BASE_URL: process.env.NEXT_URL_PUBLIC_URL },
  experimental: {
    appDir: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
