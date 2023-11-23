const RealtiesRepository = require('../../repository/RealtiesRepository.js');

class RealtiesCrudController{
    index(req, res){
        const RealtiesRepo = new RealtiesRepository();
        RealtiesRepo.getAllRealties().then(realties => {
            res.render('admin/realties/index', {realties: realties});
        })  
    }

    addRealty(req, res){
        res.render('admin/realties/add')
    }

}

module.exports = new RealtiesCrudController();