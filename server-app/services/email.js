const dotenv = require('dotenv');
dotenv.config();
const {
	SMTP_EMAIL: smtpEmail,
	SMTP_PASSWORD: smtpPassword,
} = process.env;

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

module.exports = {
	sendEmail
}