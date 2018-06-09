const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  // mongoURL: process.env.MONGO_URL || 'mongodb://user:usertest123@ds247670.mlab.com:47670/mod-22-mern',
  port: process.env.PORT || 8000,
};

export default config;
