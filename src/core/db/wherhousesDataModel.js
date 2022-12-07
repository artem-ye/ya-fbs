const db = require('../services/db.service');
const BaseDataModel = require('./base/BaseDataModel');

class WherhousesDataService extends BaseDataModel {
	Model = db.models.Wherhouse;

	async create(data) {
		const { campaignId } = data;

		if (!(await this.isCompaignExists(campaignId))) {
			throw new Error('Compaign ID ' + campaignId + ' not exists');
		}

		return await super.create(data);
	}

	async update(id, data) {
		const { campaignId } = data;

		if (!(await this.isCompaignExists(campaignId))) {
			throw new Error('Compaign ID ' + campaignId + ' not exists');
		}

		return await super.update(id, data);
	}

	async isCompaignExists(id) {
		const CompaignModel = db.models.Compaign;
		const res = await CompaignModel.findById(id);
		return !!res;
	}
}

module.exports = WherhousesDataService;
