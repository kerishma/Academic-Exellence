const router = require('express').Router();
const wordsRoutes = require('./words');

// words routes
router.use('/words', wordsRoutes);

module.exports = router;