const { Schema, model } = require('mongoose');

const schema = new Schema({
	_id: { type: Number },
	token: { type: String, required: true },
	name: { type: String, required: true },
});

module.exports = model('Campaigns', schema);
