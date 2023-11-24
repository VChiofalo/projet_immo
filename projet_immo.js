const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const session = require('express-session');
const flash = require('express-flash-messages');

//--------------------------------------------------------------------
//      Ajout du midlleware express session
//--------------------------------------------------------------------
app.use(session({
  secret: process.env.APP_KEY, resave:false, saveUninitialized:false, 
  cookie: {maxAge: 3600000} 
}))

//--------------------------------------------------------------------
//      Fausse session pour dev afin d'esquiver Browser
//                          refresh 
//--------------------------------------------------------------------
if (process.env.APP_ENV === 'dev') {
  app.use((req, res, next) =>{
    req.session.user = {
      id: 15,
      email: 'v.chiofalo@gmail.com',
      gender:3,
      firstName: 'Vincent',
      lastName: 'Chiofalo',
      phone: '0767676767'
    };
    next();
  })
}

//--------------------------------------------------------------------
//      Partage les informations de la session
//--------------------------------------------------------------------
app.use((req, res, next) =>{
  res.locals.session = req.session;
  next();
})

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');
app.use(flash());

// const router = require(path.path.join(__dirname, 'app', 'routes.js'))
const router = require('./app/routes.js'); // ajout du chemin vers le fichier routes.js
router(app); // ajout de la variable app vers le fichier routes.js

app.listen(process.env.PORT, ()=>{
    if (process.env.APP_ENV == 'dev') {
      console.log(`Le serveur est démarré : http://localhost:${process.env.PORT}`);
    }
  });