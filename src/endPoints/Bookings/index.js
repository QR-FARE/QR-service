const Router = require('express-promise-router');
const jwt = require('express-jwt');
const HttpError = require('http-errors');

const bookingRouter = new Router();

const booking = require('./booking');
const discardBooking = require('./discardBooking');
const getBookings = require('./getBookings');

bookingRouter.use(
  ['/booking', '/discardBooking', '/getBookings'],
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

module.exports = bookingRouter;
