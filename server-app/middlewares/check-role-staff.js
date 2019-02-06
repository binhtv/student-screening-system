const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.userInfo.role === 'staff') {
        next();
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};