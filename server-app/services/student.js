const Student = require('../models/student');

function getStudentByEmails(emails) {
	return Student.find({ email: { $in: emails } }).exec();
}

module.exports = {
	getStudentByEmails
}