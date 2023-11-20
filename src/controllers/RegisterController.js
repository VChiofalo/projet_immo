class RegisterController {
    index(req, res){
        res.render('register/index');
    };

    createUser(req, res){
        const connection = require('../../app/database_sql.js');
        connection.promise().query(
            'INSERT INTO `users` SET `email`=?, `password`=?, `gender`=?, `first_name`=?, `last_name`=?, `phone`=?',
            {
                email : req.body.email,
                password : req.body.password,
                gender : req.body.gender,
                first_name : req.body.firstname,
                last_name : req.body.lastName,
                phone : req.body.phoneNumber
            }
        ).then(() => {
    console.log(Object.values(rows[0]));
    process.exit();
    }).catch(()=> {

    });
};

module.exports = new RegisterController();