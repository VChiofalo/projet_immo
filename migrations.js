require('dotenv').config()
const connection = require('./app/database_sql.js');
connection.promise().query("CREATE TABLE IF NOT EXISTS `users2` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(120) COLLATE utf8mb4_general_ci NOT NULL, `password` varchar(128) COLLATE utf8mb4_general_ci NOT NULL, `gender` enum('1','2','3') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '1', `first_name` varchar(80) COLLATE utf8mb4_general_ci NOT NULL, `last_name` varchar(80) COLLATE utf8mb4_general_ci NOT NULL, `phone_number` varchar(15) COLLATE utf8mb4_general_ci NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;").then(([rows]) => {
    console.log(Object.values(rows[0]));
    process.exit();
});