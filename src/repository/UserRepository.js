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
        return await connection.promise().query('SELECT * FROM `users`').then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        });
    }

    async getUserById(id){
        return await connection.promise().query('SELECT * FROM `users` WHERE ?' , {id}).then((result) => {
            return result[0][0];
        })
    }

    async updateUserById(user, id){
        return await connection.promise().query('UPDATE `users` SET ? WHERE ?' , [user, {id}])
    }

    async deleteUserById(id){
        return await connection.promise().query('DELETE FROM `users` WHERE ?' , {id})
    }
}