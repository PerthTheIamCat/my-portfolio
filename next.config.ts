import type { NextConfig } from "next";
// import withBundleAnalyzer from "@next/bundle-analyzer";

// const withBundleAnalyzerPlugin = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {},
  allowedDevOrigins: ["local-origin.dev", "*"],
};

// export default withBundleAnalyzerPlugin(nextConfig);
export default nextConfig;
