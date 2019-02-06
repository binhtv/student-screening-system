var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const User = require("./../models/user");
const checkAuth = require('./../middlewares/check-authentication');

const dotenv = require('dotenv');
dotenv.config();
const {
	USER_TOKEN_SECRET: userTokenSecret,
} = process.env;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// User Login 
router.post('/login', function(req, res, next) {
  let fetchUser;
  User.findOne({email: req.body.email})
          .then(user => {
            if(!user){
              return res.status(401).json({
                message: 'Auth Failed'
              });
            }
            console.log(user);
            fetchUser = user;
            return bcrypt.compare(req.body.password, user.password);
          })
          .then(result => {
              if(!result){
                res.status(401).json({
                  message: "Wrong Password"
                });
              }

              const token = jwt.sign(
                  {email: fetchUser.email, userId: fetchUser._id, role: fetchUser.role},
                  userTokenSecret,
                  { expiresIn: "1h" }
              );

              res.status(200).json({
                userId: fetchUser._id,
                token: token,
                expiresIn: 3600,
                message: 'Successfully Login',
                role: fetchUser.role
              });
          })
          .catch(error => {
            res.status(401).json({
              message: "Auth Failed",
              error: error
            });
          });
});

module.exports = router;
