<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "registration_form";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect";
  exit();
}
echo "Connection done";

