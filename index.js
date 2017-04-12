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


// DATABASE QUERY DISPLAY OF ALL PRODUCTS

db.query("SELECT `item_id`,`product_name`,`price` FROM `products`", function(err, res) {
	if (err) throw err;

	for (var i = 0; i < res.length; i++) {
		console.log("Item #" + res[i].item_id + ": " +res[i].product_name + " -- $" + res[i].price);
	}
	promptCustomer();
});


// INQUIRER 

var promptCustomer = function() {
	inquirer.prompt([

	{
	type: "input",
	name: "userItem",
	message: "What would you like to buy? Enter the 'Item number':"
	},
	{
	type: "input",
	name: "userUnits",
	message: "How many would you like to buy?"
	}

	]).then(function(userResponse) {
		var item = userResponse.userItem;
		var units = userResponse.userUnits;

		

	});
};






