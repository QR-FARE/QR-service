const Router = require('express-promise-router');
const jwt = require('express-jwt');
const HttpError = require('http-errors');

const bookingRouter = new Router();

const booking = require('./booking');
const discardBooking = require('./discardBooking');
const getBookings = require('./getBookings');
const getAllBookings = require('./getAllBookings');

bookingRouter.use(
  ['/booking', '/discardBooking', '/getBookings', '/getAllBookings'],
  jwt({ secret: process.env.QR_SECRET }),
);

bookingRouter.post('/booking', async (req, res) => {
  if (!req.user) {
    throw HttpError.Unauthorized();
  }
  const bookin = req.body;
  const newBooking = await booking(bookin);
  res.send(newBooking);
});

bookingRouter.get('/getBookings/:account', async (req, res) => {
  if (!req.user) {
    throw HttpError.Unauthorized();
  }
  const { account } = req.params;
  const allBookings = await getBookings(account);
  res.send(allBookings);
});

bookingRouter.delete('/discardBooking/:_id', async (req, res) => {
  if (!req.user) {
    throw HttpError.Unauthorized();
  }
  const { _id } = req.params;
  const bookingToDiscard = await discardBooking(_id);
  res.send(bookingToDiscard);
});

bookingRouter.get('/getAllBookings/:ticket', async (req, res) => {
  if (!req.user || !req.user.verifyAccount) {
    throw HttpError.Unauthorized();
  }

  const { ticket } = req.params;
  const bookings = await getAllBookings(ticket);
  res.send(bookings);
});

module.exports = bookingRouter;
