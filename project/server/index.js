const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "eptest00",
  database: "user_list",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO user VALUES ('addaa', 'bddbb');";
  db.query(sqlInsert, (err, result) => {
    res.send("Hello World!");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
