const Account = require('../../models/Account');
const HttpError = require('http-errors');

async function updateAccount(account, userName) {
  const verifyAccount = await Account({ userName });
  if (verifyAccount) {
    throw new HttpError.NotFound('Username alreade exists');
  } else {
    const updatedAccount = await Account.update({ _id: userName }, { account });
    return updatedAccount;
  }
}

module.exports = updateAccount;
