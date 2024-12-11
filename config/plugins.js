const { act } = require("react");

module.exports = ({ env }) => ({
  "strapi-neon-tech-db-branches": {
    enabled: true,
    config: {
      neonApiKey: env("NEON_API_KEY"), // your neon API key
      neonProjectName: env("NEON_PROJECT_NAME"), // your neon project name
      neonRole: env("NEON_ROLE"), // your neon role
      gitBranch: env("GIT_BRANCH"), // branch to deploy from
    },
  },

  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
});
