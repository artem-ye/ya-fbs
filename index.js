const express = require('express');
const appRoutes = require('./src/app.routes.js');
const db = require('./src/core/services/db.service.js');
const config = require('config');

const { PORT, MONGO_URI } = getConfig();
start();

async function start() {
	const app = express();

	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	// app.use(cors());
	app.use('/', appRoutes);

	await db.connect(MONGO_URI);
	await db.initMoc();

	app.listen(PORT, () => {
		console.log(`Example app listening on port ${PORT}`);
	});
}

function getConfig() {
	try {
		const port = config.get('port');
		const mongo_uri = config.get('mongo_uri');

		return {
			PORT: port,
			MONGO_URI: mongo_uri,
		};
	} catch (err) {
		console.error('ERROR: Config files ./config/ contains error: ' + err.message);
		throw err;
	}
}
