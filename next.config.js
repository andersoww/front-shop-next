/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    BASE_URL:process.env.NEXT_URL_PUBLIC_URL
  }
};

module.exports = nextConfig;
