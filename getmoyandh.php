<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include("connect.php");
$conn = connect();

$fail_response = [
    'status' => 'error',
    'message' => 'Invalid request method'
];

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $id_secteur = '';
    $id_moyentransport = '';

    $ville_depart = $_GET["ville_dep"];
    $ville_arrivee = $_GET["ville_arr"];
    $nommoy = $_GET["nom"];

    $sql_secteur = "SELECT id_secteur FROM secteur WHERE ville_dep='$ville_depart' AND ville_arrive='$ville_arrivee'";
    $qry_secteur = mysqli_query($conn, $sql_secteur);

    if (mysqli_num_rows($qry_secteur) == 1) {
        $row_secteur = mysqli_fetch_assoc($qry_secteur);
        $id_secteur = $row_secteur["id_secteur"];
    } elseif (mysqli_num_rows($qry_secteur) > 1) {
        $fail_response = [
            'status' => 'error',
            'message' => 'Multiple rows returned from secteur table, expected only one'
        ];
        echo json_encode($fail_response);
        exit; // Stop further execution
    }

    $sql_moyentransport = "SELECT id_moyentransport FROM moyentransport WHERE nom='$nommoy'";
    $qry_moyentransport = mysqli_query($conn, $sql_moyentransport);

    if (mysqli_num_rows($qry_moyentransport) == 1) {
        $row_moyentransport = mysqli_fetch_assoc($qry_moyentransport);
        $id_moyentransport = $row_moyentransport["id_moyentransport"];
    } elseif (mysqli_num_rows($qry_moyentransport) > 1) {
        $fail_response = [
            'status' => 'error',
            'message' => 'Multiple rows returned from moyentransport table, expected only one'
        ];
        echo json_encode($fail_response);
        exit; // Stop further execution
    }

    $sql_voyage = "SELECT temp_dep,temp_arrive FROM voyage WHERE id_secteur='$id_secteur' AND id_moyentransport='$id_moyentransport'";
    $qry_voyage = mysqli_query($conn, $sql_voyage);

    if ($qry_voyage && mysqli_num_rows($qry_voyage) > 0) {
        $rows = array();
        while ($row = mysqli_fetch_assoc($qry_voyage)) {
            $rows[] = $row;
        }
        $jsonData = json_encode($rows);
        echo $jsonData;
    } else {
        $fail_response["message"] = "No data found";
        echo json_encode($fail_response);
    }

} else {
    $fail_response["message"] = "Security alert";
    echo json_encode($fail_response);
}

mysqli_close($conn);
?>
