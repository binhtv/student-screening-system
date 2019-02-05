const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const {
	EXAM_TOKEN_SECRET: examTokenSecret,
} = process.env;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, examTokenSecret);
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token!" });
    }
};