// const mysql = require('mysql2');
// require('dotenv').config();

// const createServer = async () => {
//     try {
//         const db = await mysql.createConnection(
//             {
//                 host: 'localhost',
//                 user: process.env.DB_USER,
//                 password: process.env.DB_PASSWORD
//             }
//         )
//         db.connect();
//         console.log(`Connected to ${process.env.DB_NAME}`);
//         db.query('DROP DATABASE IF EXISTS ?', process.env.DB_NAME);
//         console.log(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`);
//         db.query('CREATE DATABASE ?', process.env.DB_NAME, () => {
//             console.log(`CREATE DATABASE ${process.env.DB_NAME}`);
//             process.exit(0);
//         })
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

// Convert to sequelize