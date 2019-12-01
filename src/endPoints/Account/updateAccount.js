const Account = require('../../models/Account');
const HttpError = require('http-errors');

async function updateAccount(account, _id) {
  const verifyAccount = await Account.findOne({ _id });
  if (!verifyAccount) {
    throw new HttpError.NotFound('Username alreade exists');
  } else {
    const updatedAccount = await Account.update({ _id }, account);
    return updatedAccount;
  }
}

module.exports = updateAccount;
