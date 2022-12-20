const express = require('express');
const router = express.Router({ mergeParams: true });

// router.use('/product', require('./product.routes'));
router.use('/category', require('./category.routes'));
// router.use('/basket', require('./basket.routes'));
// router.use('/user', require('./user.routes'));
// router.use('/auth', require('./auth.routes'));

module.exports = router;
