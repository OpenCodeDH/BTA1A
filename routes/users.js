var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users_controller')

/* GET users listing. */
router.get('/', usersController.index );

router.get('/new', usersController.new );

module.exports = router;
