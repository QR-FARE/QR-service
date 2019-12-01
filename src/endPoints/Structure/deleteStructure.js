const Structure = require('../../models/Structure');

async function deleteStructure(_id) {
  const deletedStructure = await Structure.deleteOne({ _id });
  return deletedStructure;
}

module.exports = deleteStructure;
