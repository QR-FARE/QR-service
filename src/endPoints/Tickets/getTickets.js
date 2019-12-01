const Tickets = require('../../models/Tickets');
const moment = require('moment');

async function getTickets() {
  const tickets = await Tickets.find();
  return tickets;
  /*if (tickets) {
    tickets.forEach(ticket => {
      const dateToEnd = moment(ticket.dateTo).format('DD-MM-YYYY');
      if(moment(dateToEnd).isSameOrBefore(moment().format('DD-MM-YYYY'))){
        await Tickets.deleteOne({_id:ticket._id});
      }
    });
    const newTicket = await Tickets.find();
    return newTicket;
  }*/
}

module.exports = getTickets;
