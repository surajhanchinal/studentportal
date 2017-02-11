<?php
/**
 * Created by PhpStorm.
 * User: Suraj Hanchinal
 * Date: 21-01-2017
 * Time: 14:35
 */
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{ // to get a json from the html page
    $data = json_decode(file_get_contents("php://input"));
    $hello = (array)$data;
    echo $hello['suraj'];
    //echo "something wrong";
}

else{
    echo "something wrong";
}

//var_dump($_POST);
?>