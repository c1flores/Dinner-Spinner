const sequelize = require('../config/connection');
const Recipe  = require('../models/Recipe');
const User  = require('../models/User');
const seedRecipe = require('./recipe-seeds.json');
const seedUser = require('./user-seeds.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Recipe.bulkCreate(seedRecipe, {
    individualHooks: true,
    returning: true,

  });

  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();