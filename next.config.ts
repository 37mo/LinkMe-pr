import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.readdy.ai',
      },
    ],
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
