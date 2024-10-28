/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: 'export',
  basePath: '/asiradnan'
};

export default nextConfig;
