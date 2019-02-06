const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const {
	USER_TOKEN_SECRET: userTokenSecret,
} = process.env;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, userTokenSecret);
        req.userInfo = payload;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Auth failed!" });
    }
};