const db = require("./db.js");
// const promptCustomer = require("./customer.js");

var inquirer = require("inquirer");



// ===================================
// Establish connection to database
// ===================================

// **A** Without exported customer function
db.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Connected!");
  }
});

// // **B** With exported customer function (attempt)
// db.connection.connect(function(err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Connected!");
//   }
// });


// DATABASE QUERY DISPLAY OF ALL PRODUCTS

// **A**
db.query("SELECT item_id, product_name, price FROM products", function(err, res) {
	if (err) throw err;

	for (var i = 0; i < res.length; i++) {
		console.log("Item #" + res[i].item_id + ": " +res[i].product_name + " -- $" + res[i].price);
	}
	promptCustomer();
});


// INQUIRER ()

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
		var itemOrdered = userResponse.userItem;
		var unitsOrdered = userResponse.userUnits;
		var queryStock = "SELECT stock_quantity FROM products WHERE ?";

		db.query(queryStock, {item_id: itemOrdered}, function(err, res) {
			var quantity = res[0].stock_quantity;


			// IF STATEMENT
			if (quantity < unitsOrdered) {
				console.log("Order can not be completed. Only " + quantity + " left in stock.")
			} else {

				var queryPrice = "SELECT price FROM products WHERE ?";
				db.query(queryPrice, {item_id: itemOrdered}, function(err, res) {
					var price = res[0].price;
					var total = parseInt(price * unitsOrdered);
					console.log("Thank you for your order! Total: $" + total);
				});

				var newQuantity = parseInt(quantity - unitsOrdered);
				var queryUpdate = "UPDATE products SET stock_quantity = " + newQuantity + " WHERE ?";
				db.query(queryUpdate, {item_id: itemOrdered}, function(err, res) {});

			}


		});

	});
};


// // **B**
// db.customer.customerProductList(function(err, res){
// 		for (var i = 0; i < res.length; i++) {
// 		console.log("Item #" + res[i].item_id + ": " +res[i].product_name + " -- $" + res[i].price);
// 		}
// 		promptCustomer();
// 	});



