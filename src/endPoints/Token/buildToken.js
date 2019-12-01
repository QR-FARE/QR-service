const jwt = require('jsonwebtoken');
const Account = require('../../models/Account');
const randomKey = require('random-key-generator');
const hashage = require('password-hash');
const HttpError = require('http-errors');

async function buildToken(account) {
  const key = randomKey(100);
  const verifyAccount = await Account.findOne({ userName: account.userName });
  if (verifyAccount) {
    if (hashage.verify(account.password, verifyAccount.password)) {
      const token = jwt.sign({ verifyAccount, key }, process.env.QR_SECRET, {
        expiresIn: '2d',
        issuer: 'auth',
      });
      return token;
    } else {
      throw new HttpError.NotFound("Password isn't good");
    }
  } else {
    throw new HttpError.NotFound('No Account');
  }
}

module.exports = buildToken;
