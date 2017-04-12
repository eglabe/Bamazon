var inquirer = require("inquirer");
const db = require("./db.js");


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




db.query("SELECT `item_id`,`product_name`,`price` FROM `products`", function(err, res) {
	if (err) throw err;
	console.log(res[0].item_id);

	for (var i = 0; i < res.length; i++) {
		console.log("Item #" + res[i].item_id + ": " +res[i].product_name + " -- $" + res[i].price);
	}
});
