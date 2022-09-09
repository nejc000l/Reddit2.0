/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', 'cdn-icons-png.flaticon.com','avatars.dicebear.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
