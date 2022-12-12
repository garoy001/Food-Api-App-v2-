const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
	foodId: {
		type: String,
		unique: true,
	},
	label: {
		type: String,
	},
	knownAs: {
		type: String,
	},
	nutrients: {
		ENERC_KCAL: {
			type: Number,
		},
		PROCNT: {
			type: Number,
		},
		FAT: {
			type: Number,
		},
		CHOCDF: {
			type: Number,
		},
	},
	category: {
		type: String,
	},
	categoryLabel: {
		type: String,
	},
	image: {
		type: String,
	},
});

const foodInfo = mongoose.model('foodInfo', foodSchema);
module.exports = foodInfo;
