import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "andlaw.vn" },
      { protocol: "https", hostname: "andacc.vn" },
      { protocol: "https", hostname: "andgroup.com.vn" },
      { protocol: "https", hostname: "rlfprfjdxzkcglubnlec.supabase.co", pathname: "/storage/v1/object/public/**" },
    ],
  },
};

export default nextConfig;
