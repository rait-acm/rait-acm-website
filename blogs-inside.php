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
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <!-- <link href="assets/css/style.css" rel="stylesheet"> -->
  <link href="assets/css/blogs-inside.css" rel="stylesheet">

</head>

<body>
    <!-- <img class="body-img" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"> -->
    <!-- <img class="body-img" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"> -->

    <!-- ======= Header ======= -->
  <header id="header" class="fixed-top header-inner-pages">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="index.html"><img src="assets/img/acmlogo.png"></a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->

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
    <!-- <img src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"> -->
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

  
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>