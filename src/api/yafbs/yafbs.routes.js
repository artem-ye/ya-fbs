const express = require('express');
const useYandexAuthMiddleware = require('./auth.yandex.middlware');
const router = express.Router({ mergeParams: true });

router.use(useYandexAuthMiddleware());

router.get('/', (req, res) => {
	res.send('Hello Yandex FBS API');
});

module.exports = router;
