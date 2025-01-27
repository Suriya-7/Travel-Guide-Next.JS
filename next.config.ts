import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external image domains here if needed.
    unoptimized: true, // For testing local images, disable Next.js optimization temporarily.
  },
};

export default nextConfig;
