class DbDataService {
	Model;

	async getAll() {
		return await this.Model.find().lean();
	}

	async create(data) {
		const newEntry = new this.Model(data);
		return await newEntry.save();
	}

	async update(id, data) {
		const result = await this.Model.findByIdAndUpdate(id, data, { new: true });
		return result;
	}

	async remove(id) {
		const result = await this.Model.findByIdAndDelete(id);

		if (!result) {
			throw new Error('Record ID ' + id + ' does not exists');
		}

		return result;
	}
}

module.exports = DbDataService;
