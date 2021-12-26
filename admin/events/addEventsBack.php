<!-- <style>
    
</style> -->

<?php
    include '../../connectiondb.php';
    if(!$conn)
	{
		die("Connection to this database failed due to ".mysqli_connect_error());
	}

// Checked connection

// Escape user inputs for security
$name = mysqli_real_escape_string($conn, $_REQUEST['Name']);
$event_type = mysqli_real_escape_string($conn, $_REQUEST['event_type']);
$start_date = mysqli_real_escape_string($conn, $_REQUEST['start_date']);
$temp_end_date = mysqli_real_escape_string($conn, $_REQUEST['end_date']);
$end_date = // cheack if it's only one day event 
$desc = mysqli_real_escape_string($conn, $_REQUEST['description']);
$recording_link = mysqli_real_escape_string($conn, $_REQUEST['recording_link']);
// $finalvenue = ($ven == 'Other') ?  $newven : $ven;
$filename = $_FILES["file"]["name"];
$temp = explode(".", $filename); //sep filename and extension
$file_ext = substr($filename, strripos($filename, '.')); //getting extension
$newfilename =  $name . '_' . $start_date . $file_ext; //giving new name
$ok = 1;
$targetfolder = '/assets/img/events' . $newfilename; 
// check path and link
$file_type = $_FILES['file']['type'];

// checking duplicate entry 

$flag = 0;


if ($flag == 0) {
    //upload doc
    if ($file_type != "application/pdf") {
        if (move_uploaded_file($_FILES['file']['tmp_name'], $targetfolder)) {
            echo ("<div class='alert alert-success'>The file " .  $newfilename . " is uploaded </div><br>");
        } else {
            echo "<div class='alert alert-error'>Problem uploading file </div>";
        }
    } else {
        //check doc types !!!
        echo "<div class='alert alert-error'>You can't upload PDF files. Please update it.</div><br>";
    }

    // Attempt insert query execution
    $sql = "INSERT INTO events_data (name, event_type, start_date, end_date, recording_link,targetfolder) VALUES ( '$name','$event_type', '$start_date', $end_date, '$desc', '$recording_link','$targetfolder')";
    if (mysqli_query($conn, $sql)) {
        echo ("<div class='alert alert-success'>

       Records added successfully. <br>
    <a href=' .php'>Go back to homepage<br><a> </div>");

        echo ("<script>
    setTimeout(function(){ window.location=' .php' }, 8000);
    </script>");
    } else {
        echo "
    <div class='alert alert-error'>
    ERROR: Could not able to execute $sql. </div>" . mysqli_error($conn);
    }
};


// Close connection
// mysqli_close($conn);
?>