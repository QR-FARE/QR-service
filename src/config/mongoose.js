const Mongoose = require('mongoose');

Mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URL, {
  useNewUrlParser: true,
  connectTimeoutMS: 24000,
  socketTimeoutMS: 24000,
});

Mongoose.connection.on('open', () => console.log('Opening connection...'));
Mongoose.connection.on('connected', () => console.log('Connected'));
Mongoose.connection.on('error', () => console.error);
Mongoose.connection.on('disconnected', () => console.log('Disconnected'));

module.exports = Mongoose;
