/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true, // Set to false if the redirect is temporary
        },
      ]
    },
  };

export default nextConfig;
