const UsersRepository = require('../../repository/UserRepository.js');

class DashboardController{
    index(req, res){
        res.render('admin/home/index');
    }

    users(req, res){
        const UserRepo = new UsersRepository();
        UserRepo.getAllUsers().then(allUsers => {
            res.render('admin/users/users', {allUsers: allUsers});
        })
            
    }

}

module.exports = new DashboardController();