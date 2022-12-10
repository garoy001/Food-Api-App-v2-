const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	accountCreated: {
		type: String,
	},
});

const userInfo = mongoose.model('userInfo', userSchema);
module.exports = userInfo;
