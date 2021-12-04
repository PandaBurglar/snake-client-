const net = require("net");

const connect = function () {
  // create an object called conn
  const conn = net.createConnection({
    host: "localhost", 
    port: 50541,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZPB");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("you ded cuz you idled \n")
  });

  return conn; // return represents the connection with the server
};

module.exports = connect;