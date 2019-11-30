const Mongoose = require('../config/mongoose');

const ticketSchema = new Mongoose.Schema({
  name: {
    type: String,
  },
  dateEvent: {
    type: Date,
  },
  dateFrom: {
    String: Date,
  },
  dateTo: {
    type: Date,
  },
  address: {
    type: String,
  },
  structure: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Structure',
  },
});

const Tickets = Mongoose.model('Tickets', ticketSchema);

module.exports = Tickets;
