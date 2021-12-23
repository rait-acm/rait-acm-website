<?php
    session_start();
    include '../connectiondb.php';
    if(!$conn)
	{
		die("Connection to this database failed due to ".mysqli_connect_error());
	}
    
    if(isset($_POST['submit']))
    {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $user_search = "SELECT * FROM `login_credentials` WHERE `Username` LIKE '$username'";// ORDER BY `Sr` ASC";
        $query = mysqli_query($conn, $user_search);

        $email_count = mysqli_num_rows($query);

        if($email_count)
        {
            $email_pass = mysqli_fetch_assoc($query);
            $db_pass = $email_pass['Password'];
            $_SESSION['name'] = $email_pass['Name'];
            $_SESSION['user_name'] = $email_pass['Username'];
            $_SESSION['password'] = $email_pass['Password'];
            $_SESSION['post'] = $email_pass['Post'];

            if($password == $db_pass)
            {
                //$_SESSION['name']
                //echo "<h1> MAIN PAGE </h1>";
                header("location: dashboard.php");
            }
            else
            {
                //echo "Wrong Password";
                header("location: index.php?error=Password is wrong");

            }
        }
        else
        {
            //echo "Wrong email id";
            header("location: index.php?error=Username is wrong");
        }
    }
?>