const net = require("net");
const {connect} = require('./client');


console.log("Connecting ...");
const conn = connect();
conn.on("connect", () => {
  console.log("successfully connection established");// code that does something when the connection is first established
});
conn.on('connect', () => {
  conn.write('Name: CMV');
});