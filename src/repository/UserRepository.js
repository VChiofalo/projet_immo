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

    async getUserByEmail(email){
        return await connection.promise().query('SELECT * FROM `users` WHERE ?' , {email}).then((result) => {
            return (result[0].length > 0 ? result[0][0] : null);
        })
    }

    async getAllUsers(){
        return await connection.promise().query('SELECT * FROM `users`').then((results) => {
            return results[0];
        });
    }

    async getUserById(id){
        return await connection.promise().query('SELECT * FROM `users` WHERE ?' , {id}).then((result) => {
            return result[0][0];
        })
    }

    async updateUserById(user){
        return await connection.promise().query('UPDATE `users` SET `email` = ?, `gender` = ?, `first_name` = 1, `last_name` = ?, `phone_number` = ? WHERE `id` = ?' , {user})
    }
}