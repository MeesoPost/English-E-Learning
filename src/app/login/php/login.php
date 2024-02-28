<?php
// Database connection 
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "users_db";

// Get login data (safely)
$usernameInput = $_POST['username'] ?? ''; 
$passwordInput = $_POST['password'] ?? '';

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Securely fetch user data
  $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username");  
  $stmt->bindParam(':username', $usernameInput);
  $stmt->execute();
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  // Verify password
  if ($user && password_verify($passwordInput, $user['password'])) {
    session_start(); // Start session if needed
    $_SESSION['user_id'] = $user['id']; 
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
  }
} catch(PDOException $e) {
  echo json_encode(['success' => false, 'error' => 'Database error']);
}
