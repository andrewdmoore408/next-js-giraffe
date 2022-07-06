module.exports = {
  images: {
    domains: ['imgur.com'],
  },
  env: {
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DB: process.env.MONGO_DB
  }
};

