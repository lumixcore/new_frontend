/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Required for static export
  },
  allowedDevOrigins: ['landing.lumixcore.com'],
};

export default nextConfig;
