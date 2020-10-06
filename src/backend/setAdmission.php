<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');
require('db.php');


$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$dateofbirth = $data['dateofbirth'];
$aadharno =  $data['aadharno'];
$placeofbirth =  $data['placeofbirth'];
$mothertongue =  $data['mothertongue'];
$gender =  $data['gender'];
$admissionclass =  $data['admissionclass'];
$electivesubject =  $data['electivesubject'];
$tcertificate =  $data['tcertificate'];
$board =  $data['board'];
$fathersname =  $data['fathersname'];
$fathersqualification =  $data['fathersqualification'];
$fathersoccupation =  $data['fathersoccupation'];
$fathersincome =  $data['fathersincome'];
$fathersofficeaddress =  $data['fathersofficeaddress'];
$fathersmobile =  $data['fathersmobile'];
$fathersemail =  $data['fathersemail'];
$mothersname =  $data['mothersname'];
$motherqualification =  $data['motherqualification'];
$mothersoccupation =  $data['mothersoccupation'];
$mothersincome =  $data['mothersincome'];
$mothersofficeaddress =  $data['mothersofficeaddress'];
$mothersmobile =  $data['mothersmobile'];
$mothersemail =  $data['mothersemail'];
$guardianname =  $data['guardianname'];
$guardianrelationship =  $data['guardianrelationship'];
$guardianphonenumber =  $data['guardianphonenumber'];
$applicationno =  $data['fathersmobile'];

$insertstudentdetails = "insert into studentdetails(`name`,`dateofbirth`,`aadharno`,`placeofbirth`,
`mothertongue`,
`gender`,
`admissionclass`,
`electivesubject`,
`tcertificate`,
`board`,
`fathersname`,
`fathersqualification`,
`fathersoccupation`,
`fathersincome`,
`fathersofficeaddress`,
`fathersmobile`,
`fathersemail`,
`mothersname`,
`motherqualification`,
`mothersoccupation`,
`mothersincome`,
`mothersofficeaddress`,
`mothersofficeaddress`,
`mothersmobile`,
`mothersemail`,
`guardianname`,
`guardianrelationship`,
`guardianphonenumber`,
`applicationno`
) values ('$name', '$dateofbirth', '$aadharno', '$placeofbirth',
'$mothertongue',
'$gender',
'$admissionclass',
'$electivesubject',
'$tcertificate',
'$board',
'$fathersname',
'$fathersqualification',
'$fathersoccupation',
'$fathersincome',
'$fathersofficeaddress',
'$fathersmobile',
'$fathersemail',
'$mothersname',
'$motherqualification',
'$mothersoccupation',
'$mothersincome',
'$mothersofficeaddress',
'$mothersofficeaddress',
'$mothersmobile',
'$mothersemail',
'$guardianname',
'$guardianrelationship',
'$guardianphonenumber',
'$fathersmobile'
)";

mysqli_query($connection,$insertstudentdetails) or die(mysqli_error($php_errormsg));    

print_r($data);

echo 'inserted'
?>