const Structure = require('../../models/Structure');

async function updateStructure(structure, _id) {
  const updatedStructure = await Structure.create({ _id }, { structure });
  return updatedStructure;
}

module.exports = updateStructure;
