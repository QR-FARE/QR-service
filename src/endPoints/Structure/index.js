const Router = require('express-promise-router');
const jwt = require('express-jwt');
const HttpError = require('http-errors');

const structureRouter = new Router();

const deleteStructure = require('./deleteStructure');
const getStructure = require('./getStructure');
const updateStructure = require('./updateStructure');
const createStructure = require('./createStructure');

structureRouter.use(
  ['/getStructure', '/deleteStructure', '/updateStructure'],
  jwt({ secret: process.env.QR_SECRET }),
);

structureRouter.post('/createStructure', async (req, res) => {
  console.log(req.body);
  const structure = req.body;
  const newStructure = await createStructure(structure);
  res.send(newStructure);
});

structureRouter.get('/getStructure', async (req, res) => {
  if (!req.user || !req.user.structure) {
    throw HttpError.Unauthorized();
  }
  const structure = await getStructure();
  res.send(structure);
});

structureRouter.patch('/updateStructure/:_id', async (req, res) => {
  if (!req.user || !req.user.structure) {
    throw HttpError.Unauthorized();
  }
  const structure = req.body;
  const { _id } = req.params;
  const updatedStructure = await updateStructure(structure, _id);
  res.send(updatedStructure);
});

structureRouter.delete('/deleteStructure/:_id', async (req, res) => {
  if (!req.use || !req.user.structure) {
    throw HttpError.Unauthorized();
  }
  const { _id } = req.params;
  const deletedStructure = await deleteStructure(_id);
  res.send(deletedStructure);
});

module.exports = structureRouter;
