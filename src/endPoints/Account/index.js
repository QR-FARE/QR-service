const Router = require('express-promise-router');
const accountRouter = new Router();

const jwt = require('express-jwt');
const HttpError = require('http-errors');

const createAccount = require('./createAccount');
const deleteAccount = require('./deleteAccount');
const updateAccount = require('./updateAccount');
const getAccount = require('./getAccount');

accountRouter.use(
  ['/deleteAccount', '/updateAccount', '/getAccount'],
  jwt({ secret: process.env.QR_SECRET }),
);

accountRouter.post('/createAccount', async (req, res) => {
  const account = req.body;
  const newAccount = await createAccount(account);
  res.send(newAccount);
});

accountRouter.get('/getAccount', async (req, res) => {
  if (!req.user) {
    throw HttpError.Unauthorized();
  }
  const { userName } = req.user.verifyAccount;
  const account = await getAccount(userName);
  res.send(account);
});

accountRouter.patch('/updateAccount/:_id', async (req, res) => {
  if (!req.user || !req.user.verifyAccount) {
    throw HttpError.Unauthorized();
  }
  const account = req.body;
  const { _id } = req.params;
  const updatedAccount = await updateAccount(account, _id);
  res.send(updatedAccount);
});

accountRouter.delete('/deleteAccount/:_id', async (req, res) => {
  if (!req.user || !req.user.userName) {
    throw HttpError.Unauthorized();
  }
  const { _id } = req.params;
  const deletedAccount = await deleteAccount(_id);
  res.send(deletedAccount);
});

module.exports = accountRouter;
