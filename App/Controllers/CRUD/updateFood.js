// initializing and importing the various libraries needed
//
// Express
const express = require('express');
//
const foodInfo = require('../../../Database/Models/foods');
const { getFood } = require('./getFood');

exports.updateFood = async (food, foodID) => {
	try {
		let foodReturn = await getFood(foodID);
		foodReturn = foodReturn[0];
		foodReturn.nutrients.ENERC_KCAL = food.calories;
		foodReturn.nutrients.FAT = food.fat;
		console.log(foodReturn);
		await foodReturn.save();
		console.log('food updated succesfully');
	} catch (error) {
		console.log('food not updated, error\n', error);
	}
};
