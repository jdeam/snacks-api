let uuid = require('uuid');
let snacks = [
  {
    id: uuid(),
    name: 'Snickers',
    calories: 260,
    ingredients: [ 'peanuts', 'chocolate', 'caramel' ]
  },
  {
    id: uuid(),
    name: 'Pringles',
    calories: 420,
    ingredients: [ 'potatoes', 'salt']
  },
  {
    id: uuid(),
    name: 'Spicy beef jerky',
    calories: 340,
    ingredients: [ 'beef', 'chili powder', 'cayenne pepper' ]
  }
];

function createSnack(data) {
  let { name, calories, ingredients } = data;
  if (name && calories && ingredients) {
    let newSnack = { id: uuid(), name, calories, ingredients };
    snacks.push(newSnack);
    return newSnack;
  }
}

function getAllSnacks() {
  return snacks;
}

function getSnack(id) {
  return snacks.find(snack => snack.id === id);
}

function updateSnack(id, data) {
  let snackToUpdate = getSnack(id);
  if (snackToUpdate) {
    let { name, calories, ingredients } = data;
    if (name && calories && ingredients) {
      snackToUpdate.name = name;
      snackToUpdate.calories = calories;
      snackToUpdate.ingredients = ingredients;
      return snackToUpdate;
    }
    return 400;
  }
}

function deleteSnack(id) {
  let deletedSnack = snacks.find(snack => snack.id === id);
  if (deletedSnack) {
    let i = snacks.indexOf(deletedSnack);
    return snacks.splice(i, 1);
  }
}

module.exports = {
  createSnack,
  getAllSnacks,
  getSnack,
  updateSnack,
  deleteSnack
};
