// initializing and importing the various libraries needed
//
// Express
const express = require('express');
//
const foodInfo = require('../../../Database/Models/foods');

exports.getAllFood = async () => {
	try {
		let foodReturn = await foodInfo.find();
		console.log('food retrieved succesfully');
		return foodReturn;
	} catch (error) {
		console.log('food not retrieved, error');
	}
};
