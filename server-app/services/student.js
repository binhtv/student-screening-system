const Student = require('../models/student');
const Exam = require('../models/exam');

function getStudentByEmails(emails) {
	return Student.find({ email: { $in: emails } }).exec();
}

function getStudentByEmail(email) {
	return Student.findOne({ email }, {_id: 0}).exec();
}

function getExamByToken(token, status='sent') {
	return Exam.findOne({token, status: status}).exec();
}

function getExamById(id) {
	return Exam.findOne({_id: id}).exec();
}

function startExamByToken(token) {
	return Exam.update({token}, { $set: { status: 'started', updatedAt: new Date() }}).exec();
}

function submitAnswer(exam, startTime) {
	const answers1 = exam.questions[0].answers;
	const answers2 = exam.questions[1].answers;
	const answers3 = exam.questions[2].answers;
	console.log(startTime);
	console.log((new Date()).getTime());
	const updateQuery = {
		$set: { 
			status: 'answered',
			duration: (new Date()).getTime() - startTime,
			updatedAt: new Date(),
			"questions.0.answers": answers1,
			"questions.1.answers": answers2,
			"questions.2.answers": answers3,
		}
	}
	return Exam.update({_id: exam._id}, updateQuery).exec();
}

module.exports = {
	getStudentByEmails,
	getStudentByEmail,
	getExamByToken,
	getExamById,
	startExamByToken,
	submitAnswer
}