const { Schema, model } = require('mongoose');

const schema = new Schema({
	_id: { type: Number },
	campaignId: { type: Number, required: true, ref: 'Compaigns' },
	name: { type: String },
});

module.exports = model('Warehouses', schema);
