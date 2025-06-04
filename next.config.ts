import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", 
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://sites.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
