import NextFederationPlugin from "@module-federation/nextjs-mf";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    const remotes = {
      host: `host@http://localhost:3000/_next/static/${
        isServer ? "ssr" : "chunks"
      }/remoteEntry.js`,
    };
    const federatedConfig = {
      name: "app2",

      remotes: remotes,
      exposes: {
        "./Header": "./src/components/Header",
      },
      shared: {},
      filename: "static/chunks/remoteEntry.js",
    };
    config.plugins.push(new NextFederationPlugin(federatedConfig));
    return config;
  },
};
export default nextConfig;
