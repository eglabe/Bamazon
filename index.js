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


