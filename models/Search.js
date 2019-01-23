const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema(
	{
		query: {
			type: String,
			required: true,
		},
	},
);

module.exports = mongoose.model('Search', searchSchema);