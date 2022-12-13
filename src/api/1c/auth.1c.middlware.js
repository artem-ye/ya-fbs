const authService = require('../../core/services/authorization.service');

const use1cAuthMiddleware = () => async (req, res, next) => {
	if (req.method === 'OPTIONS') {
		return next();
	}

	try {
		// const token = req.headers?.authorization?.split(' ')[1];
		const token = req.headers?.authorization;
		if (!token) {
			throw new Error('Authorization header not provided');
		}

		if (!authService.validate1cToken(token)) {
			throw new Error('Invalid token');
		}

		req.token = {
			token,
		};
		next();
	} catch (err) {
		res.status(401).send('Auth error: ' + err.message);
	}
};

module.exports = use1cAuthMiddleware;
