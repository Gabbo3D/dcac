<?php

header("Access-Control-Allow-Origin: *"); //Coment this 4 lines for security, use for dev
header("Access-Control-Allow-Methods: GET, POST, PUT");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");

require_once 'config.php';
require_once 'db.php';
require_once 'product.php';

$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method === 'OPTIONS') {
    exit;
}

switch ($request_method) {
    case 'GET':
        get_products();
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        add_product($data);
        break;
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        update_product($data);
        break;
    default:
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}
?>
