<style>    
.alert {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 16px;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    text-align: center;
    margin-top: 40px;
    font-size: 25px;
}.alert-success {
    background-color: rgba(227, 253, 235, 1);
    border-color: rgba(38, 179, 3, 1);
    color: rgba(60, 118, 61, 1);
}.alert-error {
    background-color: rgba(248, 215, 218, 1);
    border-color: rgba(220, 53, 69, 1);
    color: rgba(114, 28, 36,1);
}
</style>
<?php
    include '../../connectiondb.php';
    if(!$conn)
	{
		die("Connection to this database failed due to ".mysqli_connect_error());
	}

// Escape user inputs for security
$code = mysqli_real_escape_string($conn, $_REQUEST['code']);
$name = mysqli_real_escape_string($conn, $_REQUEST['name']);
$event_type = mysqli_real_escape_string($conn, $_REQUEST['event_type']);
$start_date = mysqli_real_escape_string($conn, $_REQUEST['start_date']);
$end_date = mysqli_real_escape_string($conn, $_REQUEST['end_date']);

//$end_date = $temp_end_date ;// cheack if it's only one day event 
$desc = mysqli_real_escape_string($conn, $_REQUEST['description']);
$recording_link = mysqli_real_escape_string($conn, $_REQUEST['recording_link']);
$filename = $_FILES["file"]["name"];
$temp = explode(".", $filename); //sep filename and extension
$file_ext = substr($filename, strripos($filename, '.')); //getting extension
$newfilename =  $name . '_' . $start_date . $file_ext; //giving new name
$ok = 1;
$targetfolder = '../../assets/img/events/' . $newfilename; 

// Function to remove the spacial chars like " and ' from img path 
function RemoveSpecialChar($str) {
    $res = str_replace( array( '\'', '"',
    ',' , ';', '<', '>' ), '', $str);
    // Returning the result 
    return $res;
    }

$path = '/assets/img/events/' . RemoveSpecialChar($newfilename); 
// check path and link

$file_type = $_FILES['file']['type'];

$status = mysqli_real_escape_string($conn, $_REQUEST['status']);
// check verification code 
$code == 101 ? ($flag = 1 ): ($flag = 0);


if ($flag == 1) {
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
    $sql = "INSERT INTO events (name, event_type, start_date, end_date, recording_link, description,image, status) VALUES ( '$name','$event_type', '$start_date', $end_date,'$recording_link','$desc' , '$path', '$status')";
    if (mysqli_query($conn, $sql)) {
        echo ("<div class='alert alert-success'>

       Records added successfully. <br>
    <a href='addEvents.php'>Go back to add more <br><a> </div>");

        echo ("<script>
    setTimeout(function(){ window.location='addEvents.php' }, 4000);
    </script>");
    } else {
        echo "
    <div class='alert alert-error'>
    ERROR: Could not able to execute $sql. </div>" . mysqli_error($conn);
    }
} else{
    echo "
    <div class='alert alert-error'>
    Wrong verification code </br>
    <p> Not a authenticated user to update events </p>

   </div>";
    echo ("<script>
    setTimeout(function(){ window.location='addEvents.php' }, 4000);
    </script>");
}


// Close connection
// mysqli_close($conn);
?>