// initializing and importing the various libraries needed
//
// Express
const express = require('express');
//
const foodInfo = require('../../../Database/Models/foods');

exports.getFood = async (foodID) => {
	try {
		let foodReturn = await foodInfo.find({ foodId: foodID });
		if (foodReturn[0]) {
			console.log('food retrieved succesfully');
		} else {
			console.log('Food not found');
		}
		return foodReturn;
	} catch (error) {
		console.log('food not retrieved, error');
	}
};
