const Mongoose = require('../config/mongoose');

const structureSchema = new Mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Structure = Mongoose.model('Structure', structureSchema);

module.exports = Structure;
