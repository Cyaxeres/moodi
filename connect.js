const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
  const uri = process.env.MONGO_URI;

  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.info('> Database connected'))
    .catch(err => console.log(err));
  mongoose.set('debug', true);
};

module.exports = connectDB;
