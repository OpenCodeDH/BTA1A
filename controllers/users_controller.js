const User = require('../models/user')

class UsersController {
    index(req, res, next) {
        User.find({}, function (err, users) {
            if(err){
                console.log("err");
            } else {
                res.render('users', { title: "user",  users: users });
            }

        });

    }

    new(req, res, next) {
        res.send('respond with a new');
      }
}

module.exports = new UsersController();
