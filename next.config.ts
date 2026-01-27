import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "contentlayer/generated": path.join(process.cwd(), ".contentlayer/generated"),
    };
    return config;
  },
};

export default nextConfig;
