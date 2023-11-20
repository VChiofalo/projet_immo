const { render } = require('pug');

class RegisterController {
    index(req, res){
        res.render('register/index');
    };

    createUser(req, res){
        const connection = require('../../app/database_sql.js');
        connection.promise().query(
            'INSERT INTO `users` SET ?',
            {
                email : req.body.email,
                password : req.body.password,
                gender : req.body.gender,
                first_name : req.body.firstName,
                last_name : req.body.lastName,
                phone_number : req.body.phoneNumber
            }
        ).then(() => {
        }).catch((error)=> {
            console.log(error);
        });

        res.render('register/index');
    };
};
module.exports = new RegisterController();