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
    "Context-type": "text/html"
  })

  fs.createReadStream('./bt3.html').pipe(res);
})

app.get('/comment', (req, res) => {
  var users = fs.readFileSync('users.txt');
  var acc = JSON.parse(users);
  var comments = fs.readFileSync('comments.txt')
  var cmt = JSON.parse(comments)
  var body = ''
  for (let i = 0; i < acc.length; i++) {
    for (let j = 0; j < cmt.length; j++) {
      if (acc[i].id == cmt[j].user_id) {
        body += `<span style="border: 1px solid black; border-right: none ;" class="col col-1">
                  <img  style="height: 100px; width: 100px;"  class="img img-fluid"
                      src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="">
              </span>
              <div style="border: 1px solid black; border-left: none ;" style="margin-left: -120px;" class="col col-11">
                  <span style="font-weight: bold;" class="row name-span">${acc[i].Name}</span> <br> <p class="row content-p">${cmt[j].content}</p>
              </div>`

      }

    }

  }
  res.write(body)
  res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
