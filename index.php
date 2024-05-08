<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    include("connect.php");
    $sql="select * from client";
    $qry=mysqli_query($con,$sql);
    if ( $qry->num_rows>0){
        $rows=array();
        while ($row=mysqli_fetch_assoc($qry)){
            $rows[]=$row;
        }
        $jsonData=json_encode($rows);
        echo $jsonData;
    }else {
        echo "No data found.<br>";
    }
    mysqli_close($con);
?>