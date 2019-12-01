const Structure = require('../../models/Structure');

async function createStructure(structure) {
  const newStructure = await Structure.create(structure);
  return newStructure;
}

module.exports = createStructure;
