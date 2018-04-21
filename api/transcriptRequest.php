<?php

include '../db/config.php';

$data                 = json_decode(file_get_contents("php://input"));
$firstname            = $data->firstname;
$lastname             = $data->lastname;
$studentid            = $data->studentid;
$identificationNumber = $data->identificationNumber;
$phoneNumber          = $data->phoneNumber;

$query = $db->prepare("INSERT INTO transcript (firstname, lastname, studentid, ic, phonenumber) VALUES (:firstname, :lastname, :studentid, :identificationNumber, :phoneNumber)");
$query->execute(array(
    ':firstname'            => $firstname,
    ':lastname'             => $lastname,
    ':studentid'            => $studentid,
    ':identificationNumber' => $identificationNumber,
    'phoneNumber'           => $phonenumber,
));
