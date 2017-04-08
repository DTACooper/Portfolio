<?php
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$EmailTo = "danielcooper@hotmail.co.uk";
$Subject = "New Message Received";

// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-Transfer-Encoding: 8bit' . "\r\n";
$headers .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";

// send email
$success = mail($EmailTo, $Subject, $Body, $headers, "From:".$email);

// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>
