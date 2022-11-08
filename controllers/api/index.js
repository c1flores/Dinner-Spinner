const router = require('express').Router();
const userRouters = require('./userRoutes');
const projectRouters = require('./projectRoutes');

router.use('/users', userRouters);
router.use('/projects', projectRouters);

module.exports = router;