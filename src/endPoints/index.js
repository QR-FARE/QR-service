const Router = require('express-promise-router');
const endPointRouter = new Router();

endPointRouter.use('/account', require('./Account'));
endPointRouter.use('/tickets', require('./Tickets'));
endPointRouter.use('/token', require('./Token'));
endPointRouter.use('/bookings', require('./Bookings'));
endPointRouter.use('/structure', require('./Structure'));

module.exports = endPointRouter;
