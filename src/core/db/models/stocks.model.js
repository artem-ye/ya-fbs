const { Schema, model } = require('mongoose');

const schema = new Schema(
	{
		sku: { type: String, required: true, unique: true },
		count: { type: Number, required: true },
		warehouseId: { type: Number, require: true, ref: 'Wherhouses' },
		updatedAt: { type: Date },
		type: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

module.exports = model('Stocks', schema);
