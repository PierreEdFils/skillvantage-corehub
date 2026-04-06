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
  }
};

export default nextConfig;
