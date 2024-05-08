<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include("connect.php");
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $cin = $_POST['cin'];
    $nom = $_POST['nom'] ?? '';
    $email = $_POST['email'] ?? '';
    $prenom = $_POST['prenom'] ?? '';
    $tel = $_POST['tel'] ?? '';
    $sql="insert into client values('$cin','$nom','$prenom','$email','$tel')";
    $qry=mysqli_query($con,$sql);
    $response = [
        'status' => 'success',
        'message' => 'Data received successfully'
    ];

    echo json_encode($response);
} else {
    $response = [
        'status' => 'error',
        'message' => 'Invalid request method'
    ];
    
    echo json_encode($response);
}
mysqli_close($con);
?>
