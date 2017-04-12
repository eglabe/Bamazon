create database Bamazon;

use Bamazon;

create table products (
  item_id INT (10) auto_increment NOT NULL,
  product_name VARCHAR (128) NOT NULL,
  department_name VARCHAR (128) NOT NULL,
  price INT (10) unsigned NOT NULL,
  stock_quantity INT (10) NOT NULL,
  PRIMARY KEY (item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values ("2 Person Tent", "Camp", 100, 10),
("4 Person Tent", "Camp", 200, 10),
("Camp Chair", "Camp", 40, 20),
("First Aid Kit", "Camp", 36, 30),
("Rope (70m)", "Climb", 160, 8),
("Women's Harness", "Climb", 75, 10),
("Men's Harness", "Climb", 75, 10),
("Chalk Bag", "Climb", 20, 15),
("Yoga Mat", "Yoga", 45, 9),
("Yoga Mat (Extra Long)", "Yoga", 50, 5),
("Yoga Towel", "Yoga", 27, 10);

select * from products;