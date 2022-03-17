var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
  // console.log(request.data);
  if(request.url == '/') {
    
    response.writeHead(200, {
        "Context-type" : "text/html"
    })

    fs.createReadStream('./bt3.html').pipe(response);
  } else if (request.url == '/comment') {
    response.writeHead(200, {
        "Context-type" : "text/html"
    })
    var users = fs.readFileSync('users.txt');
      
    var acc = JSON.parse(users);
    var comments = fs.readFileSync('comments.txt')
    var cmt = JSON.parse(comments)
    var body = ''
    for (let i = 0; i < acc.length; i++) {
        for (let j = 0; j < cmt.length; j++) {
            if(acc[i].id==cmt[j].user_id){
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
    response.write(body)
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