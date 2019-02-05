const express = require('express');
const checkToken = require('../middlewares/check-exam-token');
const {
	getStudentByEmail
} = require('../services/student');
const router = express.Router();

router.route('/take-exam')
	.get(checkToken, (req, resp) => {
		resp.status(200).json(req.student);
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
module.exports = router;