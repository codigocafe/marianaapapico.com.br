import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "marianaapapico.com.br"],
  sassOptions: {
    style: "compressed",
  },
};

export default nextConfig;
