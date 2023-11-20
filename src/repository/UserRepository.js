const connection = require('../../app/database_sql.js');
module.exports = class UserRepository {
    add(user){
        let emailCheck = connection.promise().query('SELECT `email` FROM `users` WHERE `email` = ?' ,).then(()=>{}).catch((error)=> { console.log(error); });
        console.log(emailCheck);
        connection.promise().query('INSERT INTO `users` SET ?', user).then(()=>{}).catch((error)=> { console.log(error); })
    }
}