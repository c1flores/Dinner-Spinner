const sequelize = require('../config/connection');
const seedRecipe = require('./recipeData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRecipe();

  await seedUser();

  process.exit(0);
};

seedAll();