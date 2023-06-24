$(document).ready(function() {
    // Load table data
    function loadTable() {
        $.ajax({
            url: "read.php",
            type: "GET",
            success: function(data) {
                $("#table tbody").html(data);
            }
        });
    }
    loadTable();

    // Save data
    $("#myform").on("submit", function(event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        $.ajax({
            url: "create.php",
            type: "POST",
            data: {name: name, email: email},
            success: function(data) {
                if (data === "success") {
                    loadTable();
                    $("#myform")[0].reset();
                } else {
                    alert("Error saving data.");
                }
            }
        });
    });

    // Update data
    $(document).on("click", ".edit", function() {
        var id = $(this).data("id");
        var name = $(this).data("name");
        var email = $(this).data("email");
        $("#id").val(id);
        $("#name").val(name);
        $("#email").val(email);
        $("#save").hide();
        $("#update").show();
    });

    $("#update").on("click", function() {
        var id = $("#id").val();
        var name = $("#name").val();
        var email = $("#email").val();
        $.ajax({
            url: "update.php",
            type: "POST",
            data: {id: id, name: name, email: email},
            success: function(data) {
                if (data === "success") {
                    loadTable();
                    $("#myform")[0].reset();
                    $("#update").hide();
                    $("#save").show();
                } else {
                    alert("Error updating data.");
                }
            }
        });
    });

    // Delete data
    $(document).on("click", ".delete", function() {
        var id = $(this).data("id");
        $.ajax({
            url: "delete.php",
            type: "POST",
            data: {id: id},
            success: function(data) {
                if (data === "success") {
                    loadTable();
                } else {
                    alert("Error deleting data.");
                }
            }
        });
    });
});
