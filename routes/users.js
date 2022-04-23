var express = require('express');
var router = express.Router();
const User = require('../models/user')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.find({});
  res.send('user',{ users: users });
});

module.exports = router;
