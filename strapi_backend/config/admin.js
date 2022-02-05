module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3a4b7c5aa06792b23cb35e9f66f77def'),
  },
});
