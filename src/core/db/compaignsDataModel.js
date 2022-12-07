const db = require('../services/db.service');
const BaseDataModel = require('./base/BaseDataModel');

class ComaignsDataModel extends BaseDataModel {
	Model = db.models.Compaign;
}

module.exports = ComaignsDataModel;
