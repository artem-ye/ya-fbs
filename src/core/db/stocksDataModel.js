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

	// -----------------------------------------------------------
	// Yandex API requests
	// -----------------------------------------------------------

	async getStocksByWarehouseIdSkus({ warehouseId, skus }) {
		if (!warehouseId) {
			throw new Error('StocksDataService::getStocks warehouseId not provided');
		}

		if (!Array.isArray(skus)) {
			throw new Error('StocksDataService::getStocks skus not array');
		}

		const stocks = await this.Model.find({
			warehouseId: warehouseId,
			sku: { $in: skus },
		})
			.select('sku count updatedAt')
			.lean();

		const now = new Date().toISOString();
		const retVal = {
			skus: skus.map((sku) => {
				const { count, updatedAt } = stocks.find((e) => e.sku === sku) || {
					count: 0,
					updatedAt: now,
				};

				return {
					sku,
					warehouseId,
					items: [
						{
							type: 'FIT',
							count,
							updatedAt,
						},
					],
				};
			}),
		};

		return retVal;
	}
}

module.exports = StocksDataService;
