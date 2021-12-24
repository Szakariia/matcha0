const mysql = require("mysql");

// Create a connection to the database
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
