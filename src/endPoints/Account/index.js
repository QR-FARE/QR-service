const Router = require('express-promise-router');
const accountRouter = new Router();

const jwt = require('express-jwt');
const HttpError = require('http-errors');

const createAccount = require('./createAccount');
const deleteAccount = require('./deleteAccount');
const updateAccount = require('./updateAccount');
const getAccount = require('./getAccount');

accountRouter.use(
  ['/deleteAccount', '/updateAccount', '/createAccount', '/getAccount'],
  jwt({ secret: process.env.QR_SECRET }),
);

accountRouter.post('/createAccount', async (req, res) => {
  const account = req.body;
  const newAccount = await createAccount(account);
  res.send(newAccount);
});

accountRouter.get('/getAccount/:userName', async (req, res) => {
  if (req.user || req.user.userName) {
    throw HttpError.Unauthorized();
  }
  const username = req.params.userName;
  const account = await getAccount(username);
  res.send(account);
});

accountRouter.patch('/updateAccount/:username'),
  async (req, res) => {
    if (req.user || req.user.userName) {
      throw HttpError.Unauthorized();
    }
    const account = req.body;
    const userName = req.params.userName;
    const updatedAccount = await updateAccount(account, userName);
    res.send(updatedAccount);
  };

accountRouter.delete('/deleteAccount/:userName', async (req, res) => {
  if (req.user || req.user.userName) {
    throw HttpError.Unauthorized();
  }
  const userName = req.params.userName;
  const deletedAccount = await deleteAccount(userName);
  res.send(deletedAccount);
});

module.exports = accountRouter;
