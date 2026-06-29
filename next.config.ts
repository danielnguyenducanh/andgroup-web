import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.andgroup.com.vn" }],
        destination: "https://andgroup.com.vn/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "andlaw.vn" },
      { protocol: "https", hostname: "andacc.vn" },
      { protocol: "https", hostname: "andgroup.com.vn" },
    ],
  },
};

export default nextConfig;
