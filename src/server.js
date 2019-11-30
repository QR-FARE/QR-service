const endPoints = require('./endPoints');

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use('/qr-fare', endPoints);

module.exports = {
  app() {
    app.listen(process.env.PORT, () =>
      console.log('Server running on ', process.env.PORT),
    );
  },
};

module.app = app;
