const Tickets = require('../../models/Tickets');

async function updateTickets(ticket, idTicket) {
  const updatedInstance = await Tickets.update({ _id: idTicket }, ticket);
  return updatedInstance;
}

module.exports = updateTickets;
