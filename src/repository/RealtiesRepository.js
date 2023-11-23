const connection = require('../../app/database_sql.js');
module.exports = class UserRepository {
    async getAllRealties(){
        return await connection.promise().query('SELECT * FROM `realties`').then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        });
    }

}