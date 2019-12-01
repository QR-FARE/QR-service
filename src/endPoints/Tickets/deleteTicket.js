const Tickets = require('../../models/Tickets');

async function deleteTickets(idTicket) {
  const deletedInstance = await Tickets.deleteOne({ _id: idTicket });
  return deletedInstance;
}

module.exports = deleteTickets;
