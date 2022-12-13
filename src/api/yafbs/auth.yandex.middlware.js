const authService = require('../../core/services/authorization.service');

const useYandexAuthMiddleware = () => async (req, res, next) => {
	if (req.method === 'OPTIONS') {
		return next();
	}

	try {
		// const token = req.headers?.authorization?.split(' ')[1];
		const token = req.headers?.authorization;
		if (!token) {
			throw new Error('Authorization header not provided');
		}

		const validationRes = await authService.validateYandexToken(token);
		if (!validationRes) {
			throw new Error('Invalid token');
		}

		req.token = {
			token,
			campaignId: validationRes._id,
		};
		next();
	} catch (err) {
		res.status(401).send('Auth error: ' + err.message);
	}
};

module.exports = useYandexAuthMiddleware;
