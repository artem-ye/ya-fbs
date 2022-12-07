const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
	res.send('Hello Yandex FBS API');
});

module.exports = router;
