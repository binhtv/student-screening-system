const Exam = require('../models/exam');

function loadExams() {
	return Exam.find({}).sort({updatedAt: -1}).exec();
}

module.exports = {
	loadExams
}