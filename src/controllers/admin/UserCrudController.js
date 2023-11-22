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
            res.render('admin/users/update', {user: user});
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

        UserRepo.updateUserById(entity, req.params.id).then(()=>{
            
            res.redirect('/admin75/users');
        })
    }

    deleteUser(req, res){
        const UserRepo = new UsersRepository();
        UserRepo.deleteUserById(req.params.id).then(()=>{
            res.redirect('/admin75/users');
        })
    }
}

module.exports = new UserCrudController();