const Mongoose = require('../config/mongoose');

const accountSchema = new Mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
  structure: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Structure',
  },
});

const Account = Mongoose.model('Account', accountSchema);

module.exports = Account;
