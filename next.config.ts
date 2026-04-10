import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Use a normal absolute path derived from this config file instead of
    // process.cwd(), which can become a Windows extended path (`\\?\...`)
    // when launched via npm/cmd and break root detection.
    root: projectRoot
  },
  webpack: (config, { dev }) => {
    if (dev && config.cache && typeof config.cache === "object") {
      // Avoid filesystem cache temp-file churn under OneDrive on Windows.
      config.cache = {
        type: "memory"
      };
    }

    return config;
  }
};

export default nextConfig;
