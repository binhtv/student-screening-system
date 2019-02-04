var express = require('express');
var router = express.Router();

router.route('take-exam').get((req, resp) => {
	resp.status(200).json(1);
});

module.exports = router;