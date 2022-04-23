var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const Idol = require('../models/idol')
router.get('/', async function(req, res, next) {
  const idols = await Idol.find({});
  res.render('index',{ idols: idols });
});
async function runLink(){
  const temp = await Idol.find({});

  temp.forEach(e => {
    router.get('/'+e.link, function(req, res) {
      var x = e
      
      res.render('show',{result: x})
    })
  });
}
runLink();

async function fillGender(){
  const idols = await Idol.find({});
  router.post('/gioitinh', function (req, res) {
  
    var temp = req.body.gender
    var x =[]
    console.log(idols);
    idols.forEach(e => {
      if(e.gender == temp){
        x.push(e)
      }
    });
    res.render('index', {idols: x})
  })
}
fillGender()

module.exports = router;
