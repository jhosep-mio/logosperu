/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  skipTrailingSlashRedirect: true,
  trailingSlash: true, // o false, dependiendo de tus necesidades
  distDir: 'dist',
  images: {
    domains: ['api.logosperu.com.pe']
  }
}

module.exports = nextConfig
