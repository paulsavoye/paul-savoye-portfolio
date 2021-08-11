module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-common");
    }

    return config;
  },
};
