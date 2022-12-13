//Libraries
//
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
//
//Files
const { createFood } = require('../Controllers/CRUD/createFood');
const { deleteFood } = require('../Controllers/CRUD/deleteFood');
const { getFood } = require('../Controllers/CRUD/getFood');
const { updateFood } = require('../Controllers/CRUD/updateFood');
const { getAllFood } = require('../Controllers/CRUD/getAllFood');
const { redirect } = require('express/lib/response');
const e = require('express');
//
const router = express.Router();
//Middleware
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(methodOverride('_method'));

//read
router.get('/:foodID', async (req, res, next) => {
	let foodID = req.params.foodID;
	console.log(foodID);
	try {
		foodItem = await getFood(foodID);
	} catch {
		console.log('not found');
		res.redirect('/api/v1/foods');
	}
	if (foodItem[0]) {
		res.render('specificFood.ejs', { food: foodItem[0] });
	} else {
		res.redirect('/api/v1/foods');
	}
});
router.put('/:foodID', (req, res, next) => {
	let foodID = req.params.foodID;
	let food = req.body;
	updateFood(food, foodID);
	res.redirect(`/api/v1/Food/${foodID}`);
});
//delete
router.delete('/:foodID', (req, res, next) => {
	let foodID = req.params.foodID;
	deleteFood(foodID);
	res.redirect('/api/v1/foods');
});
module.exports = router;
