// prod.js - production keys here!!

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoUri: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};

// module.exports = {
//   googleClientID: '387859108773-9q2doig21r96nrlmt2o51r2k0l9rmgd2.apps.googleusercontent.com',
//   googleClientSecret: 'mIWUX5QY2tZErhetirfcXCM3',
//   mongoUri: 'mongodb://davidjai123:chobo555@ds143900.mlab.com:43900/payment-prod',
//   cookieKey: '12312321asfsdfdasfadsfdasfa',
// };
