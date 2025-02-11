<?php
class DB {
    private $conn;

    function __construct() {
        $this->conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    function execute_query($query) {
        return $this->conn->query($query);
    }
}
?>
