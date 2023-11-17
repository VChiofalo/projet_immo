require('dotenv').config()
const connection = require('./app/database_sql.js');
connection.promise().query("SELECT 'connexion SQL OK'").then(([rows]) => {
    console.log(Object.values(rows[0]));
    process.exit();
});