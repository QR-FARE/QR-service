const Structure = require('../../models/Structure');

async function getStructure() {
  const structure = await Structure.find();
  return structure;
}

module.exports = getStructure;
