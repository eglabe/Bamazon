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
  console.log(res);
});
