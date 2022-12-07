const express = require('express');
const router = express.Router({ mergeParams: true });
const wherhousesService = require('../../../core/services/wherhouses.service');

router.get('/', async (req, res) => {
	try {
		const result = await wherhousesService.getAll();
		res.status(200).json(result);
	} catch (err) {
		res.status(400).send('Error: ' + err.message);
	}
});

router.post('/', async (req, res) => {
	try {
		const data = { ...req.body };
		const result = await wherhousesService.create(data);
		return res.status(200).json(result);
	} catch (err) {
		res.status(400).send('Error: ' + err.message);
	}
});

router.patch('/:id', async (req, res) => {
	const id = req.params.id;
	const data = { ...req.body };

	try {
		const result = await wherhousesService.update(id, data);
		return res.status(200).json(result);
	} catch (err) {
		res.status(400).send('Error: ' + err.message);
	}
});

router.delete('/:id', async (req, res) => {
	const id = req.params.id;

	try {
		const result = await wherhousesService.remove(id);
		return res.status(200).json(result);
	} catch (err) {
		res.status(400).send('Error: ' + err.message);
	}
});

module.exports = router;
