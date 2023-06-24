<?php
// include the database connection file
include('db.php');

// check if form data is submitted
if(isset($_POST['id'])) {
  $id = $_POST['id'];
  $name = $_POST['name'];
  $email = $_POST['email'];

  // update the user information in the database
  $sql = "UPDATE users SET name='$name', email='$email' WHERE id=$id";
  if(mysqli_query($conn, $sql)) {
    echo "User updated successfully";
  } else {
    echo "Error updating user: " . mysqli_error($conn);
  }
}
mysqli_close($conn);
?>
