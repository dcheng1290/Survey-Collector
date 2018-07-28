const mongoose = require('mongoose');

const { Schema } = mongoose;

const mongoUrl = 'mongodb://localhost:27017/payment';

const db = mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true },
  err => {
    if (err) console.log(err);
    else console.log('DB has connected!');
  }
);
