const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const dotenv = require('dotenv');
dotenv.config();

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * @todo
   * Change the images CDN and endpoints for uploading images on strapi with a third party.
   */
  images: {
    domains: ['images.ctfassets.net'],
  },
  env: {
    GRAPHQL_API_ENDPOINT: process.env.GRAPHQL_API_ENDPOINT,
    SECRET_ADMIN_TOKEN_API: process.env.SECRET_ADMIN_TOKEN_API,
  },
};

module.exports = withVanillaExtract(withMDX(nextConfig));
