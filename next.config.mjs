/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // ✅ external images allowed
  },
  eslint: {
    ignoreDuringBuilds: true,         // ✅ skip ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true,          // ✅ skip TypeScript errors during build
  },
};

export default nextConfig;
