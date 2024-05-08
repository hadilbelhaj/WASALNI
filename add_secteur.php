<?php
include("connect.php");
$ville = array("Tunis Centre","La Marsa","Carthage","El Menzah","Le Bardo","El Omrane","Bab Bhar","Bab Souika");
$id=1;
for ($i=0;$i<8;$i++){
    for ($j=0;$j<8;$j++){
        if ($i!=$j){
            $sql="insert into secteur values('$id','$ville[$i]','$ville[$j]')";
            $qry=mysqli_query($con,$sql);
            $id++;
        }
    }

}

?>