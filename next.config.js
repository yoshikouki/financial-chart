/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    host: "financial-chart-18a4c.uc.r.appspot.com"
  },
  rewrites: async () => {
    return [
      {
        source: '/health',
        destination: '/api/health',
      },
    ];
  },
}

module.exports = nextConfig
