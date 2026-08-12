import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.22', '192.168.0.22:3000', 'localhost:3000'],
  reactCompiler: true,
};

export default nextConfig;
