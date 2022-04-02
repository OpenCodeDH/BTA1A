const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const fs = require('fs');
const { render } = require('ejs');
app.use(express.urlencoded({
  extended: true
}))
app.use(express.static('public'))
app.use(morgan('combined'))

app.get('/', (req, res) => {
  fs.createReadStream('index.html').pipe(res);
})

app.get('/table', (req, res) => {
    var x = fs.readFileSync('table.html')
  res.write(x)
  res.end()
})
app.get('/billing', (req, res) => {
    var x = fs.readFileSync('billing.html')
  res.write(x)
  res.end()
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
