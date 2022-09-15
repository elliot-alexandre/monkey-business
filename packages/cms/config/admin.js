module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '33b9715142eeb2af0a1677c8c142efce'),
  },
});
