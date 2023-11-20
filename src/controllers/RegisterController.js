const User = require('../entity/User.js');
const UsersRepository = require('../repository/UserRepository.js');
const bcrypt = require('bcryptjs'); // Nécessaire pour le hashage de mdp
class RegisterController {
    index(req, res){
        res.render('register/index');
    };

    createUser(req, res){

        let entity = new User();

        entity.setEmail(req.body.email)
            .setPassword(req.body.password) // hash le mdp
            .setGender(req.body.gender)
            .setFirstName(req.body.firstName)
            .setLastName(req.body.lastName)
            .setPhoneNumber(req.body.phoneNumber);

        const UserRepo = new UsersRepository();
        // Compare les mails et renvoie vers la bonne page en fonction
        UserRepo.emailValidation(entity.getEmail()).then(emailValidation => {
            if (emailValidation) {
                res.render('register/index', {error: '(Attention : l\'adresse email existe déjà !)'})
            } else{
                let hash = bcrypt.hashSync(entity.getPassword(), bcrypt.genSaltSync(10));
                entity.setPassword(hash);

                UserRepo.add(entity);

                // Ajoute une notification si l'action s'est déroulé comme prévu
                req.flash('notify', 'Votre compte a bien été créé.');
                // Redirige l'utilisateur si l'action s'est déroué comme prévu
                res.redirect('/');
            }
            })
    };
};
module.exports = new RegisterController();