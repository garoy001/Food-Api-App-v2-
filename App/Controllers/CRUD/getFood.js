// initializing and importing the various libraries needed
//
// Express
const express = require('express');
//
const foodInfo = require('../../../Database/Models/foods');

exports.getFood = async (food) => {	try {
    await foodInfo.create(food);
    console.log('food retrieved succesfully');
} catch (error) {
    console.log('food not retrieved, error');
}};
