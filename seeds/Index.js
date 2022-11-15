const sequelize = require('../config/connection');
const { Recipe , User } = require('../models');
const recipeData = require('./recipe-seeds.json');
const userData = require('./user-seeds.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for(const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    })
  }

  process.exit(0);
};

seedAll();