const connection = require('../../app/database_sql.js');
module.exports = class RealtyRepository {
    async getAllRealties(){
        return await connection.promise().query('SELECT * FROM `realties`').then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        });
    }

    async getRealtyById(id){
        return await connection.promise().query('SELECT * FROM `realties` WHERE ?' , {id}).then((result) => {
            return result[0][0];
        })
    }

    async add(realty){
        return await connection.promise().query('INSERT INTO `realties` SET ?', realty);
    }

    async deleteRealtyById(id){
        return await connection.promise().query('DELETE FROM `realties` WHERE ?' , {id})
    }

    async updateRealtyById(realty, id){
        return await connection.promise().query('UPDATE `realties` SET ? WHERE ?' , [realty, {id}])
    }
}