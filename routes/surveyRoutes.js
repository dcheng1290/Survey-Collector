const mongoose = require('mongoose');
const requireLogin = require('../server/middlewares/requirelogin');
const requireCredits = require('../server/middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
  });
};
