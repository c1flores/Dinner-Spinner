const router = require('express').Router();
const userRouters = require('./userRoutes');
const recipeRouters = require('./recipeRoutes');

router.use('/users', userRouters);
router.use('/recipes', recipeRouters);

module.exports = router;