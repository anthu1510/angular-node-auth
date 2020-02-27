const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DBNAME
});

connection.connect(err => {
  if (err) throw err;
  console.log("Database Connected...");
});

module.exports = connection;
