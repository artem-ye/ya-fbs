const compaignsService = require('./compaigns.service');

function validate1cToken(token) {
	if (token === '123') {
		return true;
	}

	return false;
}

async function validateYandexToken(token) {
	const res = await compaignsService.Model.findOne({ name_f: token });

	console.log(res);

	return !!res;
}

const authService = {
	validate1cToken,
	validateYandexToken,
};

module.exports = authService;
