/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // We automatically set basePath for GitHub Pages so assets load properly
  basePath: process.env.GITHUB_ACTIONS ? '/portfolio-main' : '',
};

export default nextConfig;
