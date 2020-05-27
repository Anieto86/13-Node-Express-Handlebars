-- db BURGER
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

-- BURGER TABLE  -- DON't know why my db have a syntax problem
CREATE TABLE burgers 
(
id INT NOT NULL AUTO_INCREMENT ,
burger_name VARCHAR (100) NOT NULL,
devoured  BOOLEAN NOT NULL
PRIMARY KEY (id)
);