import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/home",
      permanent: true
    }
  ]
};

export default nextConfig;
