// initializing and importing the various libraries needed
//
// Express
const express = require('express');
//
const foodInfo = require('../../../Database/Models/foods');

exports.createFood = async (food) => {
	try {
		await foodInfo.create(food);
		console.log('food created succesfully');
	} catch (error) {
		console.log('food not created, error');
	}
};
