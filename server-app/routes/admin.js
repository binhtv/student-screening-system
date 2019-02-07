const express = require('express');
const Question = require('../models/question');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');
const {
	loadExams,
	loadExamById,
	updateExamStatus
} = require('../services/exam');
const {
	sendEmail
} = require('../services/email');

router.route('/create-question').post((req, resp) => {
	const question = req.body;
	Question.create(question)
		.then(result => {
			return resp.status(200).json({
				code: 1,
				data: result
			})
		})
		.catch(error => {
			return resp.status(500).json({
				code: 0,
				error: error
			})
		})
});

router.route('/create-staff')
	.post((req, resp) => {
		bcrypt.hash(req.body.password, 10).then(password => {
			const staff = req.body;
			staff.status = 1;
			staff.role = 'staff';
			staff.password = password;
			User.create(staff).then(result => {
				return resp.status(200).json({
					code: 1,
					data: result
				})
			}).catch(error => {
				return resp.status(500).json({
					code: 0,
					error
				})
			})
		});
	});

router.route('/load-exams')
	.get((req, resp) => {
		loadExams().then(exams => {
			return resp.status(200).json({
				code: 1,
				data: exams
			})
		}).catch(err => {
			return resp.status(500).json({
				code: 0,
				data: null
			})
		})
	});
router.route('/load-exam/:id')
	.get((req, resp) => {
		loadExamById(req.params.id).then(exam => {
			return resp.status(200).json({
				code: 1,
				data: exam
			});
		}).catch(err => {
			return resp.status(500).json({
				code: 0,
				data: null
			})
		});
	});
router.route('/update-exam/:id')
	.put((req, resp) => {
		updateExamStatus(req.body.status, req.params.id).then(result => {
			return resp.status(200).json({
				code: 1,
				data: result
			});
		}).catch(err => {
			return resp.status(500).json({
				code: 0,
				data: null
			});
		});
	});

// find all user role permission as staff	
router.route('/staff-list').get((req, resp) => {
	User.find({
			role: 'staff'
		})
		.then(result => {
			return resp.status(200).json({
				code: 1,
				data: result
			})
		})
		.catch(error => {
			return resp.status(500).json({
				code: 0,
				error: error
			})
		})
});

router.route('/publish-result')
	.post((req, resp) => {
		loadExamById(req.body.examId).then(exam => {
			if (exam && (exam.status === 'fail' || exam.status === 'pass')) {
				const message = exam.status === 'fail' ? 'Oh sorry you was failed!' : 'Congratulation, you passed!';
				sendEmail(exam.studentEmail, 'Your exam result is ready to view', message);
				return resp.status(200).json({
					code: 1,
					data: null
				});
			} else {
				return resp.status(200).json({
					code: 0,
					data: null
				});
			}
		}).catch(err => {
			return resp.status(500).json({
				code: 0,
				data: null
			});
		});
	});

router.route('/load-questions').get((req, resp) => {
	Question.find({}).then(result => {
		return resp.status(200).json({
			code: 1,
			data: result
		})
	})
	.catch(error => {
		return resp.status(500).json({
			code: 0,
			error: error
		})
	})
});

router.put("/update-question", (req, res, next) => {
	const questionStatus = {
		status: req.body.status
	}
	Question.updateOne({_id: req.body.id }, questionStatus).then(result => {
		res.status(200).json({ message: "Update successful!" });
	});
});

router.put("/staff-update", (req, res, next) => {
	const userStatus = {
		status: req.body.status
	}
	User.updateOne({ email: req.body.email }, userStatus).then(result => {
	  res.status(200).json({ message: "Update successful!" });
	});
  });

module.exports = router;