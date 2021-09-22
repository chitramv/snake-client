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
      },2000)

});
// setup interface to handle user input from stdin
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
if ( key === '\u0003') {
  process.exit();// if ctrl + c is pressed then connection should terminate
}
};
stdin.on("data", handleUserInput);

setupInput();