module.exports= (app /* ajout du param app */ ) => {
    app.get('/', (req, res) => {
        let homeController = require('../src/controllers/HomeController.js');
        homeController.index(req, res);
    });
};