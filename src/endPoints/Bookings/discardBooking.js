const Bookings = require('../../models/Bookings');

async function discardBooking(_id) {
  const bookingToDiscard = await Bookings.deleteOne({ _id });
  return bookingToDiscard;
}

module.exports = discardBooking;
