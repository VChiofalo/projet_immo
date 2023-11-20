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
};