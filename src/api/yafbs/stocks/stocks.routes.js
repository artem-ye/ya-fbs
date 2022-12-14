const express = require('express');
const stocksService = require('../../../core/services/stocks.service');

const router = express.Router({ mergeParams: true });

router.post('/', async (req, res) => {
	const data = { ...req.body };

	try {
		const stocks = await stocksService.getStocksByWarehouseIdSkus(data);
		res.status(200).json(stocks);
	} catch (err) {
		res.status(400).send('Error: ' + err.message);
	}

	// res.status(200).json(data);
	// try {
	// 	const data = { ...req.body };
	// 	const result = await compaignsService.create(data);
	// 	return res.status(200).json(result);
	// } catch (err) {
	// 	res.status(400).send('Error: ' + err.message);
	// }
});

module.exports = router;
