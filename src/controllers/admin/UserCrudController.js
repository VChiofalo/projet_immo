const UsersRepository = require('../../repository/UserRepository.js');

class UserCrudController{
    index(req, res){
        const UserRepo = new UsersRepository();
        UserRepo.getAllUsers().then(allUsers => {
            res.render('admin/users/users', {allUsers: allUsers});
        })  
    }
}

module.exports = new UserCrudController();