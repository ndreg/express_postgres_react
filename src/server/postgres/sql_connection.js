const { Client } = require("pg");
const dataInfo = require("./sql_info_connection");
const client = new Client(dataInfo);

client.connect((err, res) => {
  err ? console.log(err) : console.log("Connected");
});

module.exports = client;
