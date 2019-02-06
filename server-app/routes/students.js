const express = require('express');
const checkToken = require('../middlewares/check-exam-token');
const {
	getStudentByEmail,
	getExamByToken,
	submitAnswer,
	getExamById,
	startExamByToken
} = require('../services/student');
const router = express.Router();

router.route('/get-exam')
	.get(checkToken, (req, resp) => {
		getExamByToken(req.student.token).then(exam => {
			return resp.status(200).json({
				code: 1,
				data: exam
			});
		}).catch(err => {
			return resp.status(200).json({
				code: 0,
				data: null
			});
		});
	});

router.route('/get-info')
	.get(checkToken, (req, resp) => {
		getStudentByEmail(req.student.email).then(student => resp.status(200).json({
			code: 1,
			data: student
		}))
			.catch(err => resp.status(200).json({
				code: 0,
				data: null
			}))
	});

router.route('/submit-answer')
	.put(checkToken, async (req, resp) => {
		const exam = await getExamById(req.body._id);
		submitAnswer(req.body, exam.updatedAt.getTime()).then(result => resp.status(200).json({
			code: 1,
			data: result
		})).catch(err => resp.status(200).json({
			code: 0,
			data: null
		}));
	});

router.route('/start-exam')
	.put(checkToken, (req, resp) => {
		startExamByToken(req.student.token).then(result => resp.status(200).json({
			code: 1,
			data: result
		})).catch(err => resp.status(200).json({
			code: 0,
			data: null
		}));
	});

module.exports = router;