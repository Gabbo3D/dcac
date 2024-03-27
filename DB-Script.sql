Use apiDemo;
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
INSERT INTO products (name, price)
VALUES
    ('sandwich', 2000.01),
    ('Burger', 3000.50),
    ('Salad', 4000),
    ('Cake', 5000),
    ('Pizza', 5500)    
select * from products ;
