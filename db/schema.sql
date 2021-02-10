DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false
);

INSERT INTO burgers (id, burger_name, devoured) VALUES ("1", "Big Mac with Bacon", true);
INSERT INTO burgers (id, burger_name, devoured) VALUES ("2", "Whopper with Cheese", true);
INSERT INTO burgers (id, burger_name, devoured) VALUES ("3", "Spicy Chicken Deluxe", false);

SELECT * FROM burgers;
