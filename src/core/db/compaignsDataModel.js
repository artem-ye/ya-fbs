const db = require('../services/db.service');
const BaseDataModel = require('./base/BaseDataModel');

class CampaignsDataModel extends BaseDataModel {
	Model = db.models.Campaign;

	async validateToken(token) {
		const res = await this.Model.findOne({ token: token }).lean();

		if (!res || res.token !== token) {
			return null;
		}

		return res;
	}
}

module.exports = CampaignsDataModel;
