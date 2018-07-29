const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('../routes/authRoutes.js');
const keys = require('../config/keys');
require('../services/passport');
require('../database/index');

const app = express();

app.use(bodyParser.json());

authRoutes(app);

const port = process.env.PORT || 8005;

app.listen(port, () => console.log(`Currently listening on port ${port}`));
