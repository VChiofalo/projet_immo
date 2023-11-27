const connection = require('../../app/database_sql.js');
module.exports = class ContactRepository {
    async add(contact){
        return await connection.promise().query('INSERT INTO `contacts` SET ?', contact);
    }

    async getContactById(id){
        return await connection.promise().query('SELECT * FROM `contacts` WHERE ?' , {id}).then((result) => {
            return result[0][0];
        })
    }

    async updateContactById(contact, id){
        return await connection.promise().query('UPDATE `contacts` SET ? WHERE ?' , [contact, {id}])
    }

    async emailExist(email){
        return await connection.promise().query('SELECT `id` FROM `contacts` WHERE ?' , {email}).then((result) => {
            return (result[0].length > 0);
        })
    }
}