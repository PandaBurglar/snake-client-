// Stores the active TCP connection object.
let connection;


// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // if ctrl c is pressed, exit the game
    if (key === '\u0003') {
      process.exit();
    }
    else if (key === 'w') {
      console.log("Move: up");
      connection.write("Move: up");
    }
    else if (key === 'a') {
      console.log("Move: left");
      connection.write("Move: left");
    }
    else if (key === 's') {
      console.log("Move: down");
      connection.write("Move: down");
    }
    else if (key === 'd') {
      console.log("Move: right");
      connection.write("Move: right");
    }
    else if (key === 'q') {
      connection.write("Say: EAT");
    }
    
};

module.exports = {setupInput};