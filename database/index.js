const mongoose = require('mongoose');
const keys = require('../config/keys');
const { Schema } = mongoose;

const mongoUri = keys.mongoUri;

const db = mongoose.connect(
  mongoUri,
  { useNewUrlParser: true },
  () => console.log('Db has connected!')
);

const userSchema = new Schema({
  googleId: String,
});

const User = mongoose.model('users', userSchema);

module.exports = User;
