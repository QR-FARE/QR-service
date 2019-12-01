const Account = require('../../models/Account');
const HttpError = require('http-errors');
const hashage = require('password-hash');

async function createAccount(account) {
  const verifyAccount = await Account.find({ userName: account.userName });
  console.log(verifyAccount);
  if (verifyAccount.length > 0) {
    throw new HttpError.NotFound('username already exists');
  } else {
    const { password } = account;
    const passwordSecure = await hashage.generate(password);
    const AccountWithinHash = {
      ...account,
      password: passwordSecure,
    };
    const newAccount = await Account.create(AccountWithinHash);
    return newAccount;
  }
}

module.exports = createAccount;
