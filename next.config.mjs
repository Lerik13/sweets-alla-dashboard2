/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zppgejyumyfevfgyicjm.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/product-images/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        search: '',
      },
    ],
  },
  //output: 'export',
}

export default nextConfig
