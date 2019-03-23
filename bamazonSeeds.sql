DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE PRODUCTS(
item_id int(10) NOT NULL PRIMARY KEY,
product_name varchar(100),
department_name varchar(100),
price int(10),
stock_quantity int(10));

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6050, "g-shock", "watch", 60, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7060, "dockers", "pants", 45, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7061, "dickies", "pants", 20, 8);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7062, "levi", "pants", 30, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8070, "polo", "shirt", 20, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8071, "tommy hilfiger", "shirt", 25, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8072, "gap", "shirt", 15, 6);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9080, "nike", "shoes", 35, 2);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9081, "adidas", "shoes", 50, 4);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9082, "new balance", "shoes", 30, 0);



