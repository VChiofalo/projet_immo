const User = require('../../entity/User.js');
const UsersRepository = require('../../repository/UserRepository.js');

class UserCrudController{
    index(req, res){
        const UserRepo = new UsersRepository();
        UserRepo.getAllUsers().then(allUsers => {
            res.render('admin/users/index', {allUsers: allUsers});
        })  
    }

    update(req, res){
        const UserRepo = new UsersRepository();
        UserRepo.getUserById(req.params.id).then(user => {
            res.render('admin/users/update', {id: req.params.id, user: user});
        })
    }

    updateUser(req, res){
        const UserRepo = new UsersRepository();
        let entity = new User();
        entity.setEmail(req.body.email)
            .setGender(req.body.gender)
            .setFirstName(req.body.firstName)
            .setLastName(req.body.lastName)
            .setPhoneNumber(req.body.phoneNumber);

        UserRepo.getUserById(req.params.id).then((user) => {
            let promises = [];
            if (user.email !== entity.email) {
                promises[0] = UserRepo.emailValidation(entity.getEmail()).then(emailValidation => {
                    if (emailValidation) return Promise.reject();
                })
            } 

            Promise.all(promises).then(() => {
                // Si email pas en doublon ou toujours le même
                UserRepo.updateUserById(entity, req.params.id).then(() => {
                    req.flash("notify","L'utilisateur a bien été modifié");
                    res.redirect("/admin75/users")
                });
            }).catch(() => {
                res.render(
                    'admin/users/update', 
                    {error: "Un autre utilisateur a déjà cet email",
                    id:req.params.id,
                    user: entity}
                );
                return;
            });

        });
    }

    deleteUser(req, res){
        const UserRepo = new UsersRepository();
        UserRepo.deleteUserById(req.params.id).then(()=>{
            res.redirect('/admin75/users');
        })
    }
}

module.exports = new UserCrudController();