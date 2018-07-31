const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('../config/keys');
const authRoutes = require('../routes/authRoutes.js');
const billRoutes = require('../routes/billingRoutes.js');
require('../database//models/User');
require('../services/passport');

mongoose.connect(
  keys.mongoUri,
  { useNewUrlParser: true },
  () => console.log('Db has connected!')
);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billRoutes(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  const path = require('path');
  // Like our main.js file, or main.css file!
  app.use(express.static('client/build'));
  // express will serve up index.html if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8005;

app.listen(port, () => console.log(`Currently listening on port ${port}`));
