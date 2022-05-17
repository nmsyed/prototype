const mysql = require('mysql2/promise');
const dbConfig = require("./db.config.js");
const db =  mysql.createPool({
  host : dbConfig.HOST,
  user : dbConfig.USER,
  password : dbConfig.PASSWORD,
  database : dbConfig.DB,
  //dialect : 'mariadb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

//db.connect();
// db.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });
 
module.exports = db;
