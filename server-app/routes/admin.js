const express = require('express');
const Question = require('../models/question');
const router = express.Router();

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

module.exports = router;