<?php
    require_once('connectiondb.php');
    
    
function readDocx($filePath) {
    // Create new ZIP archive
    $zip = new ZipArchive;
    $dataFile = 'word/document.xml';
    // Open received archive file
    if (true === $zip->open($filePath)) {
        // If done, search for the data file in the archive
        if (($index = $zip->locateName($dataFile)) !== false) {
            $data = $zip->getFromIndex($index);
            $zip->close();

            $dom = new DOMDocument;
            $dom->loadXML($data, LIBXML_NOENT
                | LIBXML_XINCLUDE
                | LIBXML_NOERROR
                | LIBXML_NOWARNING);

            $xmldata = $dom->saveXML();

            $contents = strip_tags($xmldata, '<w:p><w:u><w:i><w:b>');
            $contents = preg_replace("/(<(\/?)w:(.)[^>]*>)\1*/", "<$2$3>", $contents);

            $dom = new DOMDocument;
            @$dom->loadHTML($contents, LIBXML_HTML_NOIMPLIED  | LIBXML_HTML_NODEFDTD);
            $contents = $dom->saveHTML();

            // $contents = preg_replace('~<([ibu])>(?=(?:\s*<[ibu]>\s*)*?<\1>)|</([ibu])>(?=(?:\s*</[ibu]>\s*)*?</?\2>)|<p></p>~s', "", $contents);

            return $contents;
        }
        $zip->close();
    }
    // In case of failure return empty string
    return "";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Blogs</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/acmlogo.png" rel="icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  
  <link href="assets/css/blogs-inside.css" rel="stylesheet">

</head>

<body>
    
    <!-- ======= Header ======= -->
  <header id="header" class="fixed-top header-inner-pages">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="index.html"><img src="assets/img/acmlogo.png"></a></h1>
      
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto " href="index.html">Home</a></li>
          <li><a class="nav-link scrollto" href="index.html">About</a></li>
          <li><a class="nav-link scrollto" href="index.html">Domains</a></li>
          <li><a class="nav-link scrollto " href="events.html">Events</a></li>
          <li><a class="nav-link scrollto" href="teams.html">Team</a></li>
          <li><a class="nav-link scrollto" href="#blogs">Blogs</a></li>
          <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="login.html">Login</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- Navbar -->

    </div>
  </header><!-- End Header -->

  <main id="main">

  <?php
                    echo '<div class="metadata">';
                        $id = $_GET['id'];
                        $sql = "SELECT * FROM blog WHERE Bid=$id";
                        $result = $conn->query($sql);
                        $row = $result->fetch_assoc();
    ?>

 <section id="blogs" class="blogs">

      <div class="blogs-content-holder">
          <div class="blogs-content">
            <h1><?php  echo $row["BTitle"];  ?></h1>
            <h5>Author: <?php   echo $row['Authorname'] ;     ?><br>
              Posted On: <?php echo date("d-m-Y", strtotime( $row['Bpostdate']));  ?></h5>  
              <hr> 

            <p><?php 
            $filePath =  $row["Bcontent"];
            $string = readDocx($filePath); 
            echo $string; ?></p>
          </div>
          
      </div>
    </section>
    <!-- End Portfolio Section -->

  </main>
  <!-- End #main -->

  
  <div id="preloader"></div>


  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>