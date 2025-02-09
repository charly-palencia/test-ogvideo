/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/rfile',
            destination: '/video2',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
