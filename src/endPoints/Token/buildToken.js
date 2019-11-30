const jwt = require('jsonwebtoken');
const Account = require('../../models/Account');
const randomKey = require('random-key-generator');
const hashage = require('password-hash');
const HttpError = require('http-errors');

async function buildToken(account) {
  const key = randomKey(100);
  const verifyAccount = await Account.find({ userName: account.userName });
  if (verifyAccount || verifyAccount.password) {
    if (hashage.verify(account.password, verifyAccount.password)) {
      const token = jwt.sign({ account, key }, process.env.QR_SECRET, {
        expiresIn: '2d',
        issuer: 'auth',
      });
      return token;
    } else {
      throw new HttpError.NotFound("Password isn't good");
    }
  } else {
    new HttpError.NotFound('No Account');
  }
}
