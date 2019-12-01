const Bookings = require('../../models/Bookings');

async function getBookings(account) {
  const bookings = await Bookings.find({ account });
  return bookings;
}

module.exports = getBookings;
