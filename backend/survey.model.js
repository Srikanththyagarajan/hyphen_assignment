const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Survey = new Schema({
	survey_question: String,
	survey_answer: [
		{
			question: String,
		},
	],
});

module.exports = mongoose.model('Survey', Survey);
