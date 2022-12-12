const express = require('express');
const path = require('path');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post('/', (req, res, next) => {
	let food = req.body;
	res.send('food created');
});

router.get('/', (req, res, next) => {
	res.render('main.ejs');
});
module.exports = router;
