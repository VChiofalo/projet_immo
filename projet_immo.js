const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
// const router = require(path.path.join(__dirname, 'app', 'routes.js'))
const router = require('./app/routes.js'); // ajout du chemin vers le fichier routes.js
router(app); // ajout de la variable app vers le fichier routes.js

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


app.listen(process.env.PORT, ()=>{
    if (process.env.APP_ENV == 'dev') {
      console.log(`Le serveur est démarré : http://localhost:${process.env.PORT}`);
    }
  });