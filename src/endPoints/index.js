const Router = require('express-promise-router');
const endPointRouter = new Router();

endPointRouter.use('/account', require('./Account'));
endPointRouter.use('/tickets', require('./Tickets'));

module.exports = endPointRouter;
