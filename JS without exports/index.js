const db = require("./db.js");
const promptCustomer = require("./customer.js");


// ===================================
// Establish connection to database
// ===================================
db.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Connected!");
  }
});


// DATABASE QUERY DISPLAY OF ALL PRODUCTS

db.query("SELECT item_id, product_name, price FROM products", function(err, res) {
	if (err) throw err;

	for (var i = 0; i < res.length; i++) {
		console.log("Item #" + res[i].item_id + ": " +res[i].product_name + " -- $" + res[i].price);
	}
	promptCustomer();
});