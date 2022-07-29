const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "eptest00",
  database: "user_list",
  //socketPath: "/tmp/mysql.socks"
});

//app.get("/", (req, res) => {
//  const sqlInsert = "INSERT INTO user VALUES ('crazyseop8', '1dsa23');";
//  db.query(sqlInsert, (err, result) => {
//    res.send("Hello World!");
//  });
//});
app.get("/api/get", (req, res) => {
  const sqlInsert = "SELECT * FROM user;"
  db.query(sqlInsert, (err, result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
