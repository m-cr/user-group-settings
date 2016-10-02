var router = require('express').Router();

module.exports = router;

router.use('/users', require('./users'));

router.use('/groups', require('./groups'));

router.use('/sessions', require('./sessions'));