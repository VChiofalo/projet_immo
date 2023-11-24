const connection = require('../../app/database_sql.js');
module.exports = class RealtyRepository {
    async getAllRealties(){
        return await connection.promise().query('SELECT * FROM `realties`').then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        });
    }

    async add(realty){
        return await connection.promise().query('INSERT INTO `realties` SET ?', realty);
    }

}