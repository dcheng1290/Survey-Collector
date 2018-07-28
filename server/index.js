const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const port = process.env.PORT || 8005;

app.listen(port, () => console.log(`Currently listening on port ${port}`));
