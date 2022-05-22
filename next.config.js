/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        // status code 308 - Permanent Redirect
        permanent: true
      },
      {
        source: '/profile',
        destination: '/',
        // status code 307 - Temporary Redirect
        permanent: false 
      }
    ]
  }
}

module.exports = nextConfig
