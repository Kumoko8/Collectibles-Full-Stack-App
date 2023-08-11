require("dotenv").config();

const mysql = require("mysql2");
const fs = require("fs");

const seedQuery = fs.readFileSync("db/schema.sql", {
  encoding: "utf-8",
});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  multipleStatements: true,
});

connection.connect();

connection.query(seedQuery, (err) => {
  if (err) {
    throw err;
  }

  console.log("See complete");
  connection.end();
});
