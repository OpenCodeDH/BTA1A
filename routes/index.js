var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
var fs = require('fs')
/* GET home page. */
var idol = JSON.parse(fs.readFileSync('./idol.json'))
router.get('/', function(req, res) {
  res.render('index', { idols: idol})
});
idol.forEach(e => {
  router.get('/'+e.link, function(req, res) {
    var x = e
    
    res.render('show',{result: x})
  })
});
router.post('/gioitinh', function (req, res) {
  var temp = req.body.gender
  var x =[]
  idol.forEach(e => {
    if(e.gender == temp){
      x.push(e)
    }
  });
  res.render('index', {idols: x})
})

module.exports = router;
