class DashboardController{
    index(req, res){
        res.render('admin/home/index');
    }
}

module.exports = new DashboardController();