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
//
const router = express.Router();
//Middleware
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(methodOverride('_method'));

//read
router.get('/', async (req, res, next) => {
	foodArray = await getAllFood();
	res.render('knownFoods.ejs', { foods: foodArray });
});

module.exports = router;
