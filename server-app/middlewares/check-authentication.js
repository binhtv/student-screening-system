const awt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "jfjsLJKLJ#JK28499*HFHHFl4&&48934hkHF8457Y48jHKJK#4797234");
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};