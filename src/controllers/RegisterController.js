const User = require('../entity/User.js');
const UsersRepository = require('../repository/UserRepository.js');

class RegisterController {
    index(req, res){
        res.render('register/index');
    };

    createUser(req, res){
        /* const connection = require('../../app/database_sql.js');
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
        }); */

        let entity = new User();

        entity.getEmail(req.body.email)
            .setEmail(req.body.email)
            .setPassword(req.body.password)
            .setGender(req.body.gender)
            .setFirstName(req.body.firstName)
            .setLastName(req.body.lastName)
            .setPhoneNumber(req.body.phoneNumber);

        const UserRepo = new UsersRepository();
        UserRepo.add(entity);

        res.render('register/index');
    };
};
module.exports = new RegisterController();