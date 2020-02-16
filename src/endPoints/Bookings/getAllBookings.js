const Booking = require('../../models/Bookings');

async function getAllBookings(ticket) {
  const allBookings = await Booking.find({ ticket });
  return allBookings;
}

module.exports = getAllBookings;
