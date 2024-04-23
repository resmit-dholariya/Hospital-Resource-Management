<?php
session_start();
include('connect.php'); // Include your database connection file

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $enteredUsername = $_POST['username'];
    $enteredPassword = $_POST['password'];

    // Prepare and execute a query to retrieve user information
    $query = "SELECT * FROM hospital_enrollment WHERE username = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('s', $enteredUsername); // 's' indicates string type
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Compare entered password with stored password
    if ($user && $enteredPassword === $user['password']) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        header('Location: ../hosp_dashbord.html'); // Redirect to protected page
        // echo "hello";
        exit;
    } else {
        echo "invalid username or password";
        exit;
    }
}
?>
