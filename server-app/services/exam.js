const Exam = require('../models/exam');

function loadExams() {
	return Exam.find({}).sort({updatedAt: -1}).exec();
}

function loadExamById(id) {
	return Exam.findOne({_id: id}).exec();
}

function updateExamStatus(status, id) {
	return Exam.update({_id: id}, { $set: {status, updatedAt: new Date()}}).exec();
}

module.exports = {
	loadExams,
	loadExamById,
	updateExamStatus
}