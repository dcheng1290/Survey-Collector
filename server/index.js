const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('../routes/authRoutes.js');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('../config/keys');
require('../database//models/User');
require('../services/passport');

mongoose.connect(
  keys.mongoUri,
  { useNewUrlParser: true },
  () => console.log('Db has connected!')
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

authRoutes(app);

const port = process.env.PORT || 8005;

app.listen(port, () => console.log(`Currently listening on port ${port}`));
