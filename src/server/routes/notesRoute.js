const express = require("express");
const connection = require("../postgres/sql_connection");
const router = express.Router();

router
  .route("/notes")
  .get((req, res) => {
    const sql = `SELECT * FROM notes;`;
    connection.query(sql, (err, data) => {
      if (err) {
        res.send("An error had happened!");
      }
      res.send(data.rows);
      res.end();
    });
  })
  .post((req, res) => {
    console.log(req.body);
    const { username, note } = req.body,
      sql = `INSERT INTO notes(id, username, note) VALUES(default, '${username}', '${note}')`;

    connection.query(sql, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.send("Data successfully added!");
    });
  });

module.exports = router;
