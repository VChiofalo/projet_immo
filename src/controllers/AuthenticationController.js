const User = require('../entity/User.js');
const UsersRepository = require('../repository/UserRepository.js');
const bcrypt = require('bcryptjs');

class AuthenticationController {
    index(req, res){
        res.render('authentication/index');
    }

    login(req, res){

        const UserRepo = new UsersRepository();

        UserRepo.getUserByEmail(req.body.email).then(infoUser => {
            if (infoUser) {
                if (bcrypt.compareSync(req.body.password, infoUser.password)) {
                    req.session.user = {
                        id: infoUser.id,
                        gender: infoUser.gender,
                        firstName: infoUser.first_name,
                        lastName: infoUser.last_name,
                        email: infoUser.email
                    }
                    // Ajoute une notification si l'action s'est déroulé comme prévu
                    req.flash('notify', 'Vous êtes connecté');
                    // Redirige l'utilisateur si l'action s'est déroué comme prévu
                    res.redirect('/');
                    return;   
                }
            }
            res.render('authentication/index', {error: '(Attention : l\'adresse email ou mot de passe incorrect!)', email : req.body.email});

        })
    }

    logout(req, res){
        req.session.user = null;
        req.flash('notify', 'Vous êtes déconnecté');
        res.redirect('/');
    }
}
module.exports = new AuthenticationController();