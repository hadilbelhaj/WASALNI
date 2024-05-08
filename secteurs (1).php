<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include("connect.php");
$fail_response=[
    'status' => 'error',
    'message' => 'Invalid request method'
];
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $ville_depart=$_GET["ville_dep"];
    $ville_arrivee=$_GET["ville_arr"];
    $sql="select id from secteur where ville_dep='$ville_depart' and ville_arr='$ville_arrivee'";
    $qry=mysqli_query($con,$sql);
    if ( $qry->num_rows>0){
        $rows=array();
        while ($row=mysqli_fetch_assoc($qry)){
            $rows[]=$row;
        }
        $jsonData=json_encode($rows);
        echo $jsonData;
    }else {
        $fail_response["message"]="No data found";
        echo json_encode($fail_response);
    }
}else{
    $fail_response["message"]="alerte de sécurité";
    echo json_encode($fail_response);
}
mysqli_close($con);
?>