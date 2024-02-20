const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect()
};

module.exports = connectDB;