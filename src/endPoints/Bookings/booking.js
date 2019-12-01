const Bookings = require('../../models/Bookings');

async function booking(ticket) {
  console.log(ticket);
  const newBooking = await Bookings.create(ticket);
  return newBooking;
}

module.exports = booking;
