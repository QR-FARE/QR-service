const Account = require('../../models/Account');

async function getAccount(userName) {
  const InstanceAccount = await Account.find({ userName });
  return InstanceAccount;
}

module.exports = getAccount;
