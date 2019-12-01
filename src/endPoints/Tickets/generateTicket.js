const Tickets = require('../../models/Tickets');

async function generateTicket(ticket) {
  const newInstance = await Tickets.create(ticket);
  return newInstance;
}

module.exports = generateTicket;
