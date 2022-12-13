const campaignsService = require('./campaigns.service');

function validate1cToken(token) {
	if (token === '123') {
		return true;
	}

	return false;
}

async function validateYandexToken(token) {
	return await campaignsService.validateToken(token);
}

const authService = {
	validate1cToken,
	validateYandexToken,
};

module.exports = authService;
