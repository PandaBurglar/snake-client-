const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function () {
  // create an object called conn
  const conn = net.createConnection({
    IP, // host: "localhost", 
    PORT, // port: 50541,
  });
   // interpret incoming data as text
   conn.setEncoding("utf8");
   
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZPB");
    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 50);
  });
 
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("you ded cuz you idled \n")
  });

  return conn; // return represents the connection with the server
};

module.exports = {connect};