/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Optional: If your repo is NOT a custom domain (e.g., username.github.io/repo-name/)
  // basePath: '/repo-name', 
};

export default nextConfig;
