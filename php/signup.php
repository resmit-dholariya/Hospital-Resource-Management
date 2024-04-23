<?php
include('connect.php');

// Gather form data
$username = $_POST['username'];
$password = $_POST['password'];
$hospitalName = $_POST['hospitalName'];
$establishedYear = $_POST['establishedYear'];
$beds = $_POST['beds'];
$address = $_POST['address'];
$contact = $_POST['contact'];

// Check if facilities are selected
$facilities = isset($_POST['facilities']) && is_array($_POST['facilities']) ? implode(', ', $_POST['facilities']) : '';

// Check if drugs are selected
$drugs = isset($_POST['drugs']) && is_array($_POST['drugs']) ? implode(', ', $_POST['drugs']) : '';

// Insert data into the database
$sql = "INSERT INTO hospital_enrollment (username, password, hospital_name, established_year, beds, address, contact, facilities, drugs)
        VALUES ('$username', '$password', '$hospitalName', '$establishedYear', '$beds', '$address', '$contact', '$facilities', '$drugs')";

if ($conn->query($sql) === TRUE) {
    header('Location: ../hospital.html');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
