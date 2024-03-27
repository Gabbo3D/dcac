<?php
require_once 'db.php';

class Product {
    private $db;

    function __construct() {
        $this->db = new DB();
    }

    function get_products() {
        $query = "SELECT id, name, price FROM products";
        $result = $this->db->execute_query($query);
        $products = [];
        while ($row = $result->fetch_assoc()) {
            $products[] = $this->format_product($row);
        }
        echo json_encode($products);
    }

    function add_product($data) {
        $name = $data['name'];
        $price = $data['price'];
        $query = "INSERT INTO products (name, price) VALUES ('$name', $price)";
        $this->db->execute_query($query);
        echo json_encode(array("message" => "Product added successfully"));
    }

    function update_product($data) {
        $id = $data['id'];
        $name = $data['name'];
        $price = $data['price'];
        $query = "UPDATE products SET name='$name', price=$price WHERE id=$id";
        $this->db->execute_query($query);
        echo json_encode(array("message" => "Product updated successfully"));
    }

    private function format_product($product) {
        $product['price_usd'] = $product['price'] /USD_EXCHANGE_RATE;
        return $product;
    }
}

function get_products() {
    $product = new Product();
    $product->get_products();
}

function add_product($data) {
    $product = new Product();
    $product->add_product($data);
}

function update_product($data) {
    $product = new Product();
    $product->update_product($data);
}
?>
