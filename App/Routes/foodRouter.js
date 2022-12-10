const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.post('/', (req, res, next) => {
	let food = req.body;
	res.send('food created');
});

router.get('/', (req, res, next) => {
	let food = req.body;
	res.send('food created');
});
