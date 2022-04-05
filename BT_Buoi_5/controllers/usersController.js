
const users = require('../model/users')

class userControllers {
     user(req,res,next){
            res.render('index', { users })  
    }

    username(req,res,next){
        let value = req.body.value
        let value2 = {filter :value}
        let filter = value2.filter.toUpperCase()
         users.forEach((user)=>{
        let checked = user.fullname.toUpperCase().indexOf(filter) > -1
            res.render('usernamefilter',{users,checked,filter})
       })

    }
    usernameId(req,res,next){
        let  checked = +req.params.id
        if (checked) {
            const  user = users[checked-1]
            res.render('usernameid',{user})
        }
    }
    usernameGender(req,res,next){
        let  checked = req.body.value
        if (checked=='nam') { 
            res.render('username',{users,checked})
        }else if (checked=='nu') {
            res.render('username',{users,checked})
        }else{
            res.send('không tìm thấy')
        }
    }
}

module.exports = new userControllers()