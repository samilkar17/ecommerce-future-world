/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
  images:{
    remotePatterns:[{
      hostname:"cdn.shopify.com",
      protocol:'https'

    }]
  }
}

module.exports = withBundleAnalyzer(nextConfig)
