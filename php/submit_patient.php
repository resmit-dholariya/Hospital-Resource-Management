<?php
include('connect.php');

// Gather form data
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$contact = $_POST['contact'];
$email = $_POST['email'];
$location = $_POST['location'];
$oxygenLevel = $_POST['O-level'];
$bloodPressure = $_POST['BloodPressure'];
$injurySeverity = $_POST['injury'];
$bodyTemperature = $_POST['bodytemp'];
$heartRate = $_POST['heartrate'];

// Insert data into the database
$sql = "INSERT INTO patient_info (name, age, gender, contact, email, location, oxygen_level, blood_pressure, injury_severity, body_temperature, heart_rate)
        VALUES ('$name', '$age', '$gender', '$contact', '$email', '$location', '$oxygenLevel', '$bloodPressure', '$injurySeverity', '$bodyTemperature', '$heartRate')";

if ($conn->query($sql) === TRUE) {
    echo "Patient information submitted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
