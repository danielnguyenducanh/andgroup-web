import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "andlaw.vn" },
      { protocol: "https", hostname: "andacc.vn" },
      { protocol: "https", hostname: "andgroup.com.vn" },
    ],
  },
};

export default nextConfig;
