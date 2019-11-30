const Account = require('../../models/Account');
const HttpError = require('http-errors');
const hashage = require('password-hash');

async function createAccount(account) {
  const verifyAccount = await Account({ userName: account.userName });
  if (verifyAccount) {
    throw new HttpError.NotFound('username already exists');
  } else {
    const { password } = account;
    const AccountWithinHash = {
      ...account,
      password: hashage.generate(password),
    };
    const newAccount = await Account.create(AccountWithinHash);
    return newAccount;
  }
}

module.exports = createAccount;
