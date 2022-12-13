const { default: mongoose } = require('mongoose');
const Stocks = require('../db/models/stocks.model');
const Campaign = require('../db/models/campaign.model');
const Warehouse = require('../db/models/warehouse.model');

const models = {
	Stocks,
	Campaign,
	Warehouse,
};

async function connect(uri) {
	await mongoose.connect(uri);
}

async function initMoc() {
	if ((await Campaign.countDocuments()) === 0) {
		const cmp = new Campaign({ token: 'token_777', name: 'company', _id: 777 });
		await cmp.save();
	}

	if ((await Stocks.countDocuments()) === 0) {
		let itm = new Stocks({
			sku: 'test',
			count: 123,
			warehouseId: 123,
			type: 'FIT',
		});
		await itm.save();
		itm = new Stocks({
			sku: 'test2',
			count: 123,
			warehouseId: 123,
			type: 'FIT',
		});
		await itm.save();
	}
}

const db = {
	connect,
	initMoc,
	models,
};

module.exports = db;
