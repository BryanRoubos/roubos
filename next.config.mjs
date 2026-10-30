/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/blog", destination: "/writing", permanent: true },
      { source: "/contact", destination: "/about", permanent: true },
    ];
  },
};
export default nextConfig;
