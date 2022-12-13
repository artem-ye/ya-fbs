const db = require('../services/db.service');
const BaseDataModel = require('./base/BaseDataModel');

class StocksDataService extends BaseDataModel {
	Model = db.models.Stocks;

	async create(data) {
		const { campaignId } = data;

		if (!(await this.isCampaignExists(campaignId))) {
			throw new Error('Campaign ID ' + campaignId + ' not exists');
		}

		return await super.create(data);
	}

	async update(id, data) {
		const { campaignId } = data;

		if (!(await this.isCampaignExists(campaignId))) {
			throw new Error('Campaign ID ' + campaignId + ' not exists');
		}

		return await super.update(id, data);
	}

	async isCampaignExists(id) {
		const CampaignModel = db.models.Campaign;
		const res = await CampaignModel.findById(id);
		return !!res;
	}
}

module.exports = StocksDataService;
