const net = require("net");
const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");
const conn = connect();
conn.on("connect", () => {
  console.log("successfully connection established");// code that does something when the connection is first established
});
conn.on('connect', () => {
  conn.write('Name: CMV');
});
conn.on('connect', () => {
  //const moveup = setInterval(() => {
    //conn.write('Move: up');},50)

    //setTimeout(() => {
     // clearInterval(moveup)
    //},2000)

    const moveright = setInterval(() => {
      conn.write('Move: left');},50)

      setTimeout(() => {
        clearInterval(moveright)
      },1000)

});
setupInput();