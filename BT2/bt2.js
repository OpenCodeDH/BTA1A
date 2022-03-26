const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const fs = require('fs');
var qs = require("querystring");
const bodyParser = require('body-parser')
var vehiclePlates = JSON.parse(
  fs.readFileSync('vehicle_plates.json')
);
var idx = 1;
vehiclePlates.forEach((vp) => {
  vp.id = idx++;
});
app.use(express.urlencoded({
  extended: true
}))

app.use(bodyParser.json());

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.writeHead(200, {
    "Context-type" : "text/html"
})

fs.createReadStream('./bt2.html').pipe(res);
})

app.get('/cities', (req, res) => {

      var cities = [];
      var idx = 1;
      vehiclePlates.forEach((vp) => {
        cities.push({ id: vp.id, text: vp.city });
      });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(cities));
      res.end();
})

app.post('/timbienso', (req, res) => {
  var result = ""
  vehiclePlates.forEach((vp) => {
    if (vp.id == req.body.id) {
      result = vp.plate_no;
      return false;
    }
    
  });
  res.end(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})