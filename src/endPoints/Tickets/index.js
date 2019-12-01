const Router = require('express-promise-router');
const ticketRouter = new Router();

const jwt = require('express-jwt');
const HttpError = require('http-errors');

const generateTicket = require('./generateTicket');
const deleteTicket = require('./deleteTicket');
const updateTicket = require('./updateTicket');
const getTickets = require('./getTickets');

ticketRouter.use(
  ['/generateTicket', '/getTickets', '/deleteTicket', '/updateTicket'],
  jwt({ secret: process.env.QR_SECRET }),
);

ticketRouter.post('/generateTicket', async (req, res) => {
  if (
    !req.user ||
    !req.user.verifyAccount ||
    !req.user.verifyAccount.structure
  ) {
    throw HttpError.Unauthorized();
  }
  const ticket = req.body;
  const newTicket = await generateTicket(ticket);
  res.send(newTicket);
});

ticketRouter.get('/getTickets', async (req, res) => {
  if (
    !req.user ||
    !req.user.verifyAccount ||
    !req.user.verifyAccount.structure
  ) {
    throw HttpError.Unauthorized();
  }
  const tickets = await getTickets();
  res.send(tickets);
});

ticketRouter.patch('/updateTicket/:idTicket', async (req, res) => {
  if (
    !req.user ||
    !req.user.verifyAccount ||
    !req.user.verifyAccount.structure
  ) {
    throw HttpError.Unauthorized();
  }
  const { idTicket } = req.params;
  const ticket = req.body;
  const newTicket = await updateTicket(ticket, idTicket);
  res.send(newTicket);
});

ticketRouter.delete('/deleteTicket/:idTicket', async (req, res) => {
  if (
    !req.user ||
    !req.user.verifyAccount ||
    !req.user.verifyAccount.structure
  ) {
    throw HttpError.Unauthorized();
  }
  const { idTicket } = req.params;
  const ticket = await generateTicket(idTicket);
  res.send(ticket);
});

module.exports = ticketRouter;
