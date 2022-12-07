const express = require('express');
const appRoutes = require('./src/app.routes.js');
const db = require('./src/core/services/db.service.js');

const PORT = 3000;
const MONGO_URI = 'mongodb://127.0.0.1:27017/ya_fbs';

async function start() {
	const app = express();

	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	// app.use(cors());
	app.use('/', appRoutes);

	await db.connect(MONGO_URI);
	await db.initMoc();

	// app.get('/', (req, res) => {
	// 	res.send('Hello World!');
	// });
	app.listen(PORT, () => {
		console.log(`Example app listening on port ${PORT}`);
	});
}

start();
