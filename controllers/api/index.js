const router = require('express').Router();
const userRouters = require('./user-routes');
const projectRouters = require('./user-routes');

router.use('/users', userRouters);
router.use('/projects', projectRouters);

module.exports = router;