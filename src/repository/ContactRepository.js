const connection = require('../../app/database_sql.js');
module.exports = class ContactRepository {
    async add(contact){
        return await connection.promise().query('INSERT INTO `contacts` SET ?', contact);
    }

}