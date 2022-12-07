const express = require('express');
const router = express.Router({ mergeParams: true });

router.use('/api/yafbs', require('./api/yafbs/yafbs.routes'));
router.use('/api/1c', require('./api/1c/1c.routes'));

router.get('/', (req, res) => {
	res.send('Api works');
});

module.exports = router;
