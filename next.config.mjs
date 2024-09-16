/** @type {import('next').NextConfig} */
const nextConfig = {
  // Asynchronously define a temporary redirect from "/" to "/home".
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false, // Temporary redirect (307 status).
      },
    ];
  },
};

export default nextConfig;
