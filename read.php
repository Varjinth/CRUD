<?php
include "db.php";
$sql = "SELECT * FROM users ORDER BY id DESC";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row["id"] . "</td>";
        echo "<td>" . $row["name"] . "</td>";
        echo "<td>" . $row["email"] . "</td>";
        echo "<td>";
        echo "<button class='btn btn-sm btn-warning edit' data-id='" . $row["id"] . "' data-name='" . $row["name"] . "' data-email='" . $row["email"] . "'>Edit</button>";
        echo "<button class='btn btn-sm btn-danger delete' data-id='" . $row["id"] . "'>Delete</button>";
        echo "</td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='4'>No data found</td></tr>";
}
mysqli_close($conn);
?>
