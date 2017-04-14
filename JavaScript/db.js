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

module.exports = connection;

var customerProductList = function() {
	connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
		if (err) throw err;

		for (var i = 0; i < res.length; i++) {
			console.log("Item #" + res[i].item_id + ": " +res[i].product_name + " -- $" + res[i].price);
		}
	});
}