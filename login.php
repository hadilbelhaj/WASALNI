<?php
include './connect.php';
// Set headers to allow cross-origin resource sharing (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$conn=connect();
// Check if username and password are provided
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    if (isset($data['email']) && isset($data['password'])) {
        $email = $data['email'];
        $password = $data['password'];

        // Query to check if the user exists in the database
        $sql = "SELECT * FROM compte WHERE email = '$email' AND password = '$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // User found, return success message
            $response = array("message" => "Login successful");
            echo json_encode($response);
        } else {
            // User not found, return error message
            http_response_code(401);
            $response = array("error" => "Invalid email or password");
            echo json_encode($response);
        }
    } else {
        // email or password not provided, return error message
        http_response_code(400);
        $response = array("error" => "email and password are required");
        echo json_encode($response);
    }
}

// Close connection
$conn->close();
?>
