
var fs = require('fs');
var qs = require('querystring');
const user2 = require('./user')

const user = [user2]
module.exports = {
    port: 3000,
    test: function(req,res){
        return new Promise((resolve, rejects)=>{    
            if (req.url == '/') {
                resolve(fs.createReadStream('./views/views.html').pipe(res))
            }else if (req.url == '/api/user') {
                const name1 = user[0].users[0].Name
                const name2 = user[0].users[1].Name
                const name3 = user[0].users[2].Name
                const content1 = user[0].comments[0].content
                const content2 = user[0].comments[1].content
                const content3 = user[0].comments[2].content
                  res.writeHead(200,'text/html')
                  res.write(`<h1>user: ${name1}</h1> <br <p>comment: ${content1} </p><br><hr> <h1>user: ${name2}</h1><br><p> comment: ${content2} </p><br><hr> <h1>user: ${name3}</h1> <br><p>  comment:${content3}</p>`);
                  res.end();
            }else{
                return rejects(fs.createReadStream('./views/error.html').pipe(res))
            }
           
       }).then((values)=>{
           console.log(values);
       }).catch((err)=>{
          console.log(err);
       })
    }

}