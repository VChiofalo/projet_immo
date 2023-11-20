const connection = require('../../app/database_sql.js');
module.exports = class UserRepository {
    add(user){
        /* let emailCheck = connection.promise().query('SELECT `email` FROM `users` WHERE `email` = ?' , user.email).then(()=>{}).catch((error)=> { console.log(error); });
        console.log(emailCheck); */
        connection.promise().query('INSERT INTO `users` SET ?', user).then(()=>{}).catch((error)=> { console.log(error); })
    }

    emailValidation(email){
        return connection.promise().query('SELECT `email` FROM `users` WHERE `email` = ?' , email).then(()=>{}).catch((error)=> { console.log(error); });
    }
}
