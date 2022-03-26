const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const fs = require('fs');
app.use(express.urlencoded({
  extended: true
}))

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.writeHead(200, {
    "Context-type" : "text/html"
})

fs.createReadStream('./bt1.html').pipe(res);
})

app.post('/new_demo', (req, res) => {
  var user = fs.readFileSync('user.txt');
      
  var acc = JSON.parse(user);
  
  if((req.body.user == acc.user) && (req.body.password == acc.password)){
    res.send('Dang nhap thanh cong')
  
  } else{
    res.send('Tai khoan hoac mat khau sai')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})