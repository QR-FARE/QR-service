const Mongoose = require('mongoose');

Mongoose.connect(
  'mongodb://localhost/QR-FARE' ||
    process.env.MONGO_URL ||
    process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    connectTimeoutMS: 24000,
    socketTimeoutMS: 24000,
  },
);

Mongoose.connection.on('open', () => console.log('Opening connection...'));
Mongoose.connection.on('connected', () => console.log('Connected'));
Mongoose.connection.on('error', () => console.error);
Mongoose.connection.on('disconnected', () => console.log('Disconnected'));

module.exports = Mongoose;
