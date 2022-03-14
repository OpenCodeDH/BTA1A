var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
  // console.log(request.data);
  if(request.url == '/index.html') {
    
    response.writeHead(200, {
        "Context-type" : "text/html"
    })

    fs.createReadStream('./index.html').pipe(response);
  } else if (request.url == '/new_demo') {
    // console.log(request);
    request.on('data', function (chunk) {
      let data = '' + chunk
      var check = JSON.parse('{"' + decodeURI(data).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
      
      var user = fs.readFileSync('user.txt');
      
      var acc = JSON.parse(user);
      if((check.user == acc.user) && (check.password == acc.password)){
        console.log('dang nhap thanh cong');
      
      } else{
        console.log('tai khoan hoac mat khau sai');
      }
      
    });

    response.end();
  } else {

    response.writeHead(404, {
        "Context-type" : "text/plain"
    })
    response.write('404 not found' + request.url);
    response.end();
  }

})

server.listen(3000, function(){
    console.log('Connected Successfull!')
})