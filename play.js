const net = require("net");
const {connect} = require('./client');


console.log("Connecting ...");
const conn = connect();
conn.on("connect", () => {
  console.log("connected");// code that does something when the connection is first established
});