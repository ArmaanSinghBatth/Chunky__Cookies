import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable styled-jsx for CookieCard hover effects
  compiler: {
    styledComponents: false,
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
