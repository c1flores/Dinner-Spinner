const { Recipe } = require('../models');

const recipedata = [
    {
    recipeName: 'Chewy Chocolate Chip Coookie',
    ingOne: 'All-Purpose Flour',
    ingOneOz: '2 cups',
    ingTwo: 'Baking Soda',
    ingTwoOz: '1/2 Teaspoon',
    ingThree: 'Salt',
    ingThreeOz: '1/2 Teaspoon',
    IngFour: 'Unsalted Butter(melted)',
    IngFourOz: '3/4 cup',
    IngFive: 'Brown Sugar',
    IngFiveOz: '1 cup',
    IngSix: 'White Sugar',
    IngSixOz: '1/2 cup',
    IngSeven: 'Vanilla Extract',
    IngSevenOz: '1 Tablespoon',
    IngEight: 'Egg',
    IngEightOz: '1 egg',
    IngNine: 'Egg Yolk',
    IngNineOz: '1 Egg Yolk',
    IngTen: 'Semisweet Choclate Chips',
    IngTenOz: '2 cups',
    recipeNotes: "Step 1: Preheat the oven to 325 degrees F (165 degrees C). Grease cookie ."
    }
]

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;
