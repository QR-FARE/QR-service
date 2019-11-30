const Account = require('../../models/Account');

async function deleteAccount(idAccount) {
  const deletedAccount = await Account({ _id: idAccount });
  return deletedAccount;
}

module.exports = deleteAccount;
