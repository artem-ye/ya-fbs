const express = require('express');
const use1cAuthMiddleware = require('./auth.1c.middlware');
const router = express.Router({ mergeParams: true });

router.use(use1cAuthMiddleware());

router.get('/', (req, res) => {
	res.send('1C services works well');
});

router.use('/compaign', require('./compaign/compaign.routes'));
router.use('/wherhouse', require('./wherhouse/wherhouse.routes'));
router.use('/stocks', require('./stocks/stocks.routes'));

module.exports = router;
