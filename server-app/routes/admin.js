const express = require('express');
const Question = require('../models/question');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');
const {
	loadExams
} = require('../services/exam');

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

module.exports = router;