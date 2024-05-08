<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './connect.php';
header("Content-type:application/json");
$conn=connect();
$method = $_SERVER["REQUEST_METHOD"];
switch ($method)
{
    case 'POST':
        //récupère les données envoyées par Angular
        $data = file_get_contents("php://input");
        //convertir la chaîne json en format php
        $inputs = json_decode($data, true);
        $n=$inputs["fullname"];
        $un=$inputs["username"];
        $e = $inputs["email"];
        $p = $inputs["password"];
        $t=$inputs["type"];
        $msg = [];
        //préparer la requête
        if ($t==1){
            $prepared = $conn->prepare("INSERT INTO user (fullname,username) values (?,?)");
            $prepared->bind_param("ss",$n,$un);
        }elseif($t==0){
            $prepared = $conn->prepare("INSERT INTO admin (fullname) values (?)");
            $prepared->bind_param("s",$n);
        }
        try {
        // Execute the prepared statement
        $resultat =  $prepared->execute();
        // Return success message
        $response = array("message" => "User or admin succefuly added");
        http_response_code(203); // Set HTTP response status code to 201 Created
    } catch (Exception $e) {
        // Return error message if insertion fails
        $error = array("error" => "Failed to add user or admin:". $e->getMessage());
        http_response_code(500); // Set HTTP response status code to 500 Internal Server Error
        echo json_encode($error);
    }
    $userid = $conn->insert_id;
    $prepared = $conn->prepare("INSERT INTO compte (id_user,email,password,account_type) values (?,?,?,?)");
    $prepared->bind_param("isss",$userid,$e,$p,$t);
     try {
        // Execute the prepared statement
        $resultat =  $prepared->execute();
        // Return success message
        $response = array("message" => "account succefuly created");
        http_response_code(201); // Set HTTP response status code to 201 Created
        echo json_encode($response);
    } catch (Exception $e) {
        // Return error message if insertion fails
        $error = array("error" => "Failed to create account " . $e->getMessage());
        http_response_code(500); // Set HTTP response status code to 500 Internal Server Error
        echo json_encode($error);
    }
    break;
    default: 
    {
        http_response_code(204);
        $msg = ["msg" => "method not allowed"];
        echo json_encode($msg);
    }
}
$conn->close();

?>