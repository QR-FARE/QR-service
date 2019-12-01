const Router = require('express-promise-router');
const buildToken = require('./buildToken');

const tokenRouter = new Router();

tokenRouter.post('/buildToken', async (req, res) => {
  const account = req.body;
  const token = await buildToken(account);
  res.send(token);
});

module.exports = tokenRouter;
