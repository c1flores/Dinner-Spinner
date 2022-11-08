const router = require('express').Router();
const apiRoutes = require('./api');
const homeRotes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRotes);

module.exports = router;