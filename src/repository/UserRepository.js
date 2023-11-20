const connection = require('../../app/database_sql.js');
module.exports = class UserRepository {
    async add(user){
        await connection.promise().query('INSERT INTO `users` SET ?', user);
    }

    // Vérifie si l'addresse mail rentrer par l'utilisateur existe en bdd
    async emailValidation(email){
        return await connection.promise().query('SELECT `id` FROM `users` WHERE ?' , {email}).then((result) => {
            return (result[0].length > 0);
        })
    }
}
