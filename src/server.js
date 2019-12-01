const endPoints = require('./endPoints');

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use('/qr_fare', endPoints);

module.exports = {
  start() {
    app.listen(process.env.PORT, () =>
      console.log('Server running on ', process.env.PORT),
    );
  },
};

module.app = app;
