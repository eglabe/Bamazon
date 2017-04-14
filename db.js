var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "Bamazon"
});

// **A**
module.exports = connection;

// // **B**
// module.exports = {

// 	connection: connection,

// 	customer: require("./customer.js") (connection)

// }


