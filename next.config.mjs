/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'sadakatcdn.cyparta.com',
              pathname: '/Cyparta_System/**',
          },
      ],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
