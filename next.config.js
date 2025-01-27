/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Keep this for static export
  images: {
    unoptimized: true,  // Disable image optimization for static export
  },
};

module.exports = nextConfig;
