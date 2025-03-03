const isProd = process.env.NODE_ENV === "production"
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/phumtest.github.io/" : "",
  basePath: isProd ? "/phumtest.github.io" : "",
  output: "export",
}

export default nextConfig
