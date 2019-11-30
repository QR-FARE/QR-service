const Account = require('../../models/Account');

async function getAccount(idAccount) {
  const InstanceAccount = await Account.find({ _id: idAccount });
  return InstanceAccount;
}

module.exports = getAccount;
