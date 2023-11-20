const User = require('../entity/User.js');
const UsersRepository = require('../repository/UserRepository.js');
const bcrypt = require('bcryptjs');

class RegisterController {
    index(req, res){
        res.render('register/index');
    };

    createUser(req, res){

        let entity = new User();

        entity.setEmail(req.body.email)
            .setPassword(bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)))
            .setGender(req.body.gender)
            .setFirstName(req.body.firstName)
            .setLastName(req.body.lastName)
            .setPhoneNumber(req.body.phoneNumber);

        const UserRepo = new UsersRepository();
        UserRepo.emailValidation(entity.getEmail()).then(emailValidation => {
            if (emailValidation) {
                res.render('register/index', {error: '(Attention : l\'adresse email existe déjà !)'})
            } else{
                UserRepo.add(entity);
        
                res.render('home/index'); 
            }
            })
    };
};
module.exports = new RegisterController();