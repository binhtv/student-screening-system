const express = require('express');
const Student = require('../models/student');
const router = express.Router();

const dotenv = require('dotenv');
dotenv.config();
const {
	SMTP_EMAIL: smtpEmail,
	SMTP_PASSWORD: smtpPassword
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

async function sendEmail() {
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
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: "binh12121989@gmail.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: "<b>Hello world?</b>" // html body
	};

	// send mail with defined transport object
	let info = await transporter.sendMail(mailOptions)

	console.log("Message sent: %s", info.messageId);
	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}
router.route('/send-email')
	.get((req, resp) => {
		sendEmail();
		resp.status(200).json(1);
	});

module.exports = router;