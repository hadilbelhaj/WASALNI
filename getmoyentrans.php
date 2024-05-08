<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include("connect.php");
$conn=connect();
$fail_response=[
    'status' => 'error',
    'message' => 'Invalid request method'
];
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $sql="select nom from moyentransport ";
    $qry=mysqli_query($conn,$sql);
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
    }}
    
else{
    $fail_response["message"]="alerte de sécurité";
    echo json_encode($fail_response);
}
mysqli_close($conn);
?>