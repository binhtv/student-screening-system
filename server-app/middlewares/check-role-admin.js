const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.userInfo.role === 'admin') {
        next();
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};