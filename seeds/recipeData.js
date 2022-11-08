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
    recipeNotes: "Step 1: Preheat the oven to 325 degrees F (165 degrees C). Grease cookie sheets or line with parchment paper. Step 2: Sift flour, baking soda, and salt together; set aside. Step 3: Beat brown sugar, melted butter, and white sugar with an electric mixer in a large bowl until smooth. Beat in egg, egg yolk, and vanilla until light and creamy; add flour mixture and stir until dough is just combined. Stir in chocolate chips. Step 4: Drop spoonfuls of dough 3 inches apart onto the prepared baking sheets. Step 5: Bake in the preheated oven until edges are golden, about 15 to 17 minutes. Cool on the cookie sheets briefly before transferring them to a wire rack to cool completely."
    }
]

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;
