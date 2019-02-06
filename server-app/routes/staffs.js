const express = require('express');
const jwt = require('jsonwebtoken');
const Student = require('../models/student');
const Exam = require('../models/exam');
const { getStudentByEmails } = require('../services/student');
const { getActiveQuestionCount, getRandomQuestions } = require('../services/question');
const {
	loadExams
} = require('../services/exam');
const User = require('../models/user');


const router = express.Router();

const dotenv = require('dotenv');
dotenv.config();
const {
	SMTP_EMAIL: smtpEmail,
	SMTP_PASSWORD: smtpPassword,
	EXAM_TOKEN_SECRET: examTokenSecret,
	EXAM_URL: examUrl
} = process.env;

router.route('/student-list').get((req, resp) => {
	Student.find({})
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

async function sendEmail(email, subject, message, messageHTML = '') {
	const nodemailer = require("nodemailer");
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	// let account = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: smtpEmail, // generated ethereal user
			pass: smtpPassword // generated ethereal password
		}
	});

	// setup email data with unicode symbols
	let mailOptions = {
		from: '"Student Screening System 👻" <sss@noreply.com>', // sender address
		to: email, // list of receivers
		subject: subject, // Subject line
		text: message, // plain text body
		html: messageHTML // html body
	};

	// send mail with defined transport object
	await transporter.sendMail(mailOptions);
}

router.route('/send-invitation')
	.post(async (req, resp) => {
		const data = req.body;
		if (data.emails && data.emails.length > 0) {
			const questionCount = await getActiveQuestionCount();
			const randomQuestions = await getRandomQuestions(3, questionCount);
			const students = await getStudentByEmails(data.emails);
			const questions = [];
			randomQuestions.forEach(q => {
				questions.push({
					title: q.title,
					question: q.question,
					answers: []
				})
			});
			data.emails.forEach(email => {
				const payload = {
					email,
					timestamp: new Date().getTime()
				}
				let exam = {
					studentEmail: email,
					questions,
					token: jwt.sign(payload, examTokenSecret, { expiresIn: '7d' }),
					status: 'sent',
					duration: 0,
					createdAt: new Date(),
					updatedAt: new Date()
				};
				const student = students.find(s => s.email === email);
				Exam.create(exam).then(result => {
					console.log(result);
					const emailSubject = data.emailSubject;
					let emailMessage = data.emailMessage;
					const invitationLink = `<a href="${examUrl}?token=${exam.token}">link</a>`;
					emailMessage = emailMessage.replace('##STUDENT_NAME##', `${student.lastName} ${student.firstName}`).replace('##EXAM_LINK##', invitationLink);
					sendEmail(email, emailSubject, '', emailMessage);
				}).catch(error => console.log(error));
			});

			resp.status(200).json({
				code: 1,
				data: `We are sending invitation to ${data.emails.length} student(s). The system will notify you when all are complete.`
			});
		} else {
			resp.status(200).json('nothing sent');
		}
	});



router.put("/staff-update", (req, res, next) => {
	const userStatus = {
		status: req.body.status
	}
	User.updateOne({ email: req.body.email }, userStatus).then(result => {
	  res.status(200).json({ message: "Update successful!" });
	});
  });

router.route('/get-invitations')
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