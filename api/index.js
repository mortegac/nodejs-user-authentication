// Dependencies
var express = require('express');
var router = express.Router();
//var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
// Models
var User = require('./models/user');


// Routes
router.get('/authenticate', function (req, res) {
	res.send('api/v0/authenticate is working!');
});

router.post('/authenticate', require('./authenticate'));

User.methods(['get','put','post','delete']);
User.register(router, '/users');

module.exports = router;