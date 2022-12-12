// initializing and importing the various libraries needed
//
// Express
const express = require('express');
//
const foodInfo = require('../../../Database/Models/foods');

exports.updateFood = async (food) => {
	try {
		await foodInfo.create(food);
		console.log('food updated succesfully');
	} catch (error) {
		console.log('food not updated, error');
	}
};
