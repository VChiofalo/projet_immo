module.exports= (app /* ajout du param app */ ) => {
    app.get('/', (req, res) => {
        let homeController = require('../src/controllers/HomeController.js');
        homeController.index(req, res);
    });

    app.get('/register', (req, res) => {
        let registerController = require('../src/controllers/RegisterController.js');
        registerController.index(req, res);
    });

    app.post('/register', (req, res) => {
        let registerController = require('../src/controllers/RegisterController.js');
        registerController.createUser(req, res);
    });

    app.get('/authentication', (req, res) => {
        let authenticationController = require('../src/controllers/AuthenticationController.js');
        authenticationController.index(req, res);
    });

    app.post('/authentication', (req, res) => {
        let authenticationController = require('../src/controllers/AuthenticationController.js');
        authenticationController.login(req, res);
    });

    app.get('/logout', (req, res) => {
        let authenticationController = require('../src/controllers/AuthenticationController.js');
        authenticationController.logout(req, res);
    });

    app.get('/admin75', (req, res) => {
        let dashboardController = require('../src/controllers/admin/DashboardController.js');
        dashboardController.index(req, res);
    });

    app.get('/admin75/users', (req, res) => {
        let userCrudController = require('../src/controllers/admin/UserCrudController.js');
        userCrudController.index(req, res);
    });

    app.get('/admin75/user/update/:id([0-9]+)', (req, res) => {
        let userCrudController = require('../src/controllers/admin/UserCrudController.js');
        userCrudController.update(req, res);
    });

    app.post('/admin75/user/update/:id([0-9]+)', (req, res) => {
        let userCrudController = require('../src/controllers/admin/UserCrudController.js');
        userCrudController.updateUser(req, res);
    });

    app.get('/admin75/user/delete/:id([0-9]+)', (req, res) => {
        let userCrudController = require('../src/controllers/admin/UserCrudController.js');
        userCrudController.deleteUser(req, res);
    });

    app.get('/admin75/realties', (req, res) => {
        let realtyCrudController = require('../src/controllers/admin/RealtyCrudController.js');
        realtyCrudController.index(req, res);
    });

    app.get('/admin75/realty/add', (req, res) => {
        let realtyCrudController = require('../src/controllers/admin/RealtyCrudController.js');
        realtyCrudController.addRealty(req, res);
    });
    
    app.post('/admin75/realty/add', (req, res) => {
        let realtyCrudController = require('../src/controllers/admin/RealtyCrudController.js');
        realtyCrudController.addRealtyProcess(req, res);
    });

    app.get('/admin75/realty/delete/:id([0-9]+)', (req, res) => {
        let realtyCrudController = require('../src/controllers/admin/RealtyCrudController.js');
        realtyCrudController.deleteRealty(req, res);
    });

    app.get('/admin75/realty/update/:id([0-9]+)', (req, res) => {
        let realtyCrudController = require('../src/controllers/admin/RealtyCrudController.js');
        realtyCrudController.updateRealty(req, res);
    });

    app.post('/admin75/realty/update/:id([0-9]+)', (req, res) => {
        let realtyCrudController = require('../src/controllers/admin/RealtyCrudController.js');
        realtyCrudController.updateRealtyProcess(req, res);
    });
};