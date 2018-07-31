const mongoose = require('mongoose');
const requireLogin = require('../server/middlewares/requirelogin');
const requireCredits = require('../server/middlewares/requireCredits');
const surveyTemplate = require('../services/emailTemplates');
const Mailer = require('../services/Mailer');
const Survey = require('../database/models/Survey');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // sending email here
    const mailer = new Mailer(survey, surveyTemplate(template));
  });
};
