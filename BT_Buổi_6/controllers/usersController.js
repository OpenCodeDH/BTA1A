const User = require('../model/users')


class userControllers {
    async user(req,res,next){
    let users =  await User.find()
    console.log(users);
        res.render('index', { users })  
    }

  async  username(req,res,next){
        let value = req.body.value
        let value2 = {filter :value}
        let filter = value2.filter.toUpperCase()
        let users =  await User.find()
         users.forEach((user)=>{
        let checked = user.fullname.toUpperCase().indexOf(filter) > -1
            res.render('usernamefilter',{users,checked,filter})
       })

    }
  async  usernameId(req,res,next){
      try {
        let user =  await User.findOne({_id:req.params.id})
        console.log(user.intership);
        res.render('usernameid',{user})
      } catch (error) {
          
      }
     
}
  async   usernameGender(req,res,next){
        let  checked = req.body.value
        let users =  await User.find()
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