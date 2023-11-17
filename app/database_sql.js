// Récupération du client
const mysql = require('mysql2');

// Création avec export de la connexion à la bdd
module.exports = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    port: process.env.SQL_PORT,
    database: process.env.SQL_DBNAME    
});