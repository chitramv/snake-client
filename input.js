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

module.exports = {setupInput}; // exporting as object shorthand