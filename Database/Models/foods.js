const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
	foodName: {
		type: String,
	},
	foodImg: {
		type: String,
	},
	nutrition: {
		calories: {
			type: String,
		},
		fat: {
			type: String,
		},
	},
});

const foodInfo = mongoose.model('foodInfo', foodSchema);
module.exports = foodInfo;
