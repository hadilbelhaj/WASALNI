<?php
include("connect.php");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
$fail_response=[
    'status' => 'error',
    'message' => 'Invalid request method'
];
$success_response= [
    'status' => 'success',
    'message' => 'Data received successfully'
];
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!empty($data)){
        $matricule=$data["matricule"];
        $temp_dep=$data["temp_dep"];
        $temp_arr=$data["temp_arr"];
        $prix=$data["prix"];
        $secteur=$data["secteur"];
        $sql="select * from voyage where temp_dep='$temp_dep' and temp_arr='$temp_arr' and matricule_moy='$matricule'";
        $qry=mysqli_query($con,$sql);
        if ($qry->num_rows==0){
            $sql="select count(*) as length from voyage";
            $qry=mysqli_query($con,$sql);
            $row=mysqli_fetch_assoc($qry);
            $id=$row["length"];
            $id++;
            $sql="insert into voyage values('$id','$temp_dep','$temp_arr','$prix','$secteur','$matricule')";
            $qry=mysqli_query($con,$sql);
            echo json_encode($success_response);
        }else {        
            $fail_response["message"]="voyage déja existe";
            echo json_encode($fail_response);
        }
    }else {
        $fail_response["message"]="probléme dans l'envoie du data";
        echo json_encode($fail_response);
    }
}else {
    $fail_response["message"]="alerte du sécurité";
    echo json_encode($fail_response);
}
mysqli_close($con);
?>