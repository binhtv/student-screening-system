const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const {
	EXAM_TOKEN_SECRET: examTokenSecret,
} = process.env;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const payload = jwt.verify(token, examTokenSecret);
        req.student = payload;
        req.student.token = token;
        next();
    } catch (error) {
        console.log(error);
        res.status(200).json({ code: 0, message: "Invalid token!" });
    }
};