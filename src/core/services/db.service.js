const { default: mongoose } = require('mongoose');
const Stocks = require('../db/models/stocks.model');
const Compaign = require('../db/models/compaign.model');
const Wherhouse = require('../db/models/wherhouse.model');

const models = {
	Stocks,
	Compaign,
	Wherhouse,
};

async function connect(uri) {
	await mongoose.connect(uri);
}

async function initMoc() {
	// const cmp = new Compaign({ token: 'token_777', name: 'company', _id: 777 });
	// cmp.save();
	// if ((await Stocks.find()).length === 0) {
	// 	console.log('Initializing...');
	// 	let itm = new Stocks({
	// 		sku: 'test',
	// 		count: 123,
	// 		warehouseId: 123,
	// 		type: 'FIT',
	// 	});
	// 	itm.save();
	// 	itm = new Stocks({
	// 		sku: 'test2',
	// 		count: 123,
	// 		warehouseId: 123,
	// 		type: 'FIT',
	// 	});
	// 	itm.save();
	// 	console.log('Done!!!');
	// }
}

const db = {
	connect,
	initMoc,
	models,
};

module.exports = db;
