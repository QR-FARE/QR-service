const Mongoose = require('../config/mongoose');

const bookingSchema = new Mongoose.Schema({
  dateBooking: {
    type: Date,
  },
  account: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },
  ticket: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Tickets',
  },
  nombre: {
    type: Number,
  },
  metadata: {
    type: Object,
  },
});

const Booking = Mongoose.model('Booking', bookingSchema);

module.exports = Booking;
