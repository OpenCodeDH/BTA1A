var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/tables', function (req, res, next) {
  const url = req.url
  const attribute = {checked: url,text:' active bg-gradient-primary'}
  res.render('./pages/tables',{title:'Dashboard',attribute})
});


router.get('/billing', function (req, res, next) {
  const url = req.url
  const attribute = {checked: url,text:' active bg-gradient-primary'}
  res.render('./pages/billing',{title:'Billing',attribute});
});

router.get('/virtual-reality', function (req, res, next) {
  const url = req.url
  const attribute = {checked: url,text:' active bg-gradient-primary'}
  res.render('./pages/virtual-reality',{title:'Virtual Reality',attribute});
  console.log(url);
});

router.get('/rtl', function (req, res, next) {
  res.render('./pages/rtl');
});

router.get('/notifications', function (req, res, next) {
  const url = req.url
  const attribute = {checked: url,text:' active bg-gradient-primary'}
  res.render('./pages/notifications',{title:'Notifications',attribute});
});

router.get('/profile', function (req, res, next) {
  const url = req.url
  const attribute = {checked: url,text:' active bg-gradient-primary'}
  res.render('./pages/profile',{title:'Profile',attribute});
});

router.get('/sign-in', function (req, res, next) {
  res.render('./pages/sign-in');
});

router.get('/sign-up', function (req, res, next) {
  res.render('./pages/sign-up');
});
module.exports = router;
