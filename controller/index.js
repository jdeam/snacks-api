let model = require('../model');

function createSnack(req, res) {
  let newSnack = model.createSnack(req.body);
  if (newSnack) {
    return res.status(201).json({ data: newSnack });
  }
  res.status(400).json({ error: { message: 'Invalid input.' } });
}

function getAllSnacks(req, res) {
  res.status(200).json({ data: model.getAllSnacks() });
}

function getSnack(req, res) {
  let snackFound = model.getSnack(req.params.id);
  if (snackFound) {
    return res.status(200).json({ data: snackFound });
  }
  res.status(404).json({ error: { message: 'Snack not found.' } });
}

function updateSnack(req, res) {
  let updatedSnack = model.updateSnack(req.params.id, req.body);
  if (typeof updatedSnack === 'object') {
    res.status(200).json({ data: updatedSnack });
  } else if (updatedSnack === 400) {
    res.status(400).json({ error: { message: 'Invalid input.' } });
  }
  res.status(404).json({ error: { message: 'Snack not found.' } });
}

function deleteSnack(req, res) {
  let deletedSnack = model.deleteSnack(req.params.id);
  if (deletedSnack) {
    res.status(200).json({ data: deletedSnack });
  }
  res.status(404).json({ error: { message: 'Snack not found.' } });
}

module.exports = {
  createSnack,
  getAllSnacks,
  getSnack,
  updateSnack,
  deleteSnack
};
