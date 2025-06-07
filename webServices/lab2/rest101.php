<?php

require 'vendor/autoload.php';


header("Content-Type: application/json");


$method = $_SERVER['REQUEST_METHOD'];
$urlParts = explode('/', trim($_SERVER['REQUEST_URI'], '/'));



$resource = $urlParts[3] ?? null; 
$resourceID = $urlParts[4] ?? null; 


if ($resource !== 'products') {
    http_response_code(404);
    echo json_encode(["error" => "Resource doesn't exist"]);
    exit;
}

$db = new MySQLHandler('products');

switch ($method) {
    case 'GET':
        if ($resourceID) {
            $data = $db->get_record_by_id($resourceID);
            if ($data && !empty($data)) {
                echo json_encode($data[0]);
            } else {
                http_response_code(404);
                echo json_encode(['error' => "Resource doesn't exist"]);
            }
        } 
        else {
            $data = $db->get_data();
            echo json_encode($data);
        }
        break;

    case 'POST':
        $input = json_decode(file_get_contents("php://input"), true);

        if (!isset($input['name'], $input['price'], $input['units_in_stock'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Bad request']);
            break;
        }

        $success = $db->save($input);
        if ($success) {
            http_response_code(201);
            echo json_encode(['status' => 'Resource was added successfully!']);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'internal server error!']);
        }
        break;

    case 'PUT':
        if (!$resourceID) {
            http_response_code(400);
            echo json_encode(['error' => 'Product id is required.']);
            break;
        }

        if (!$db->get_record_by_id($resourceID)) {
            http_response_code(404);
            echo json_encode(['error' => 'Resource not found!']);
            break;
        }


        $input = json_decode(file_get_contents("php://input"), true);

        if (!isset($input['name'], $input['price'], $input['units_in_stock'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Bad request']);
            break;
        }
        $db->connect();
        $success = $db->update($input, $resourceID);
        if ($success) {
            http_response_code(200);
            echo json_encode($input);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'internal server error!']);
        }
        break;

    case 'DELETE':
        if (!$resourceID) {
            http_response_code(400);
            echo json_encode(['error' => 'Product id is required.']);
            break;
        }

        if (!$db->get_record_by_id($resourceID)) {
            http_response_code(404);
            echo json_encode(['error' => "Resource doesn't exist"]);
            break;
        }
        $db->connect();

        $db->delete($resourceID);
        echo json_encode(['status' => 'Resource was deleted successfully!']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => "method not allowed!"]);
        break;
}
