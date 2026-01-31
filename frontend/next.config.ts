import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const repoName = "github-pages";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  ...(isProd && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
