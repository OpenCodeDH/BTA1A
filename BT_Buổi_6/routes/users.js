var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/usersController')

/* GET home page. */
router.get('/', userControllers.user);

router.post('/name',userControllers.username)
router.get('/:id',userControllers.usernameId)
router.post('/gender',userControllers.usernameGender)

module.exports = router;
