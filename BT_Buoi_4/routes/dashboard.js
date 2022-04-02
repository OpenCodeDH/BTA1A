
const  express  = require('express')
const router  = express.Router()
/* GET users listing. */
router.get('/', function(req, res, next) {
  const url = req.url
  const attribute = {checked: url,text:' active bg-gradient-primary'}
  res.render('dashboard',{title:'Dashboard',attribute})
});

module.exports = router;