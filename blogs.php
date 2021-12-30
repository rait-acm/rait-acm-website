<?php
    require_once('connectiondb.php');
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

  <!-- CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">


  <!-- Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/blogs.css">

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
          <li><a class="nav-link scrollto" href="#portfolio-details">Blogs</a></li>
          <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="Login/index.php">Login</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <main id="main">

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

    <!-- Section: Blog v.1 -->
<section class="my-0">

  <!-- Section heading -->
  <div class="section-title">
    <h2 class="h1-responsive font-weight-bold text-center my-5">Blogs</h2>
    <p class="text-center w-responsive mx-auto mb-5">The first step in blogging is not writing them but reading them. ~Jeff Jarvis</p>
  </div>

  <?php
        
        $sql = "SELECT * FROM blog order by Bpostdate DESC";
        $result = $conn->query($sql);

        while ($row = $result->fetch_assoc()) {
  ?>

  <!-- Grid row -->
  <div class="row">

    <!-- Grid column -->
    <div class="col-lg-5">

      <!-- Featured image -->
      <div class="view overlay rounded z-depth-2 mb-lg-0 mb-4">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-7">

      
      <!-- Post title -->
      <h3 class="font-weight-bold mb-3"><strong><?php  echo $row["BTitle"] ;  ?></strong></h3>
      <!-- Excerpt -->
      <p><?php  echo   $row["Bdescription"];   ?></p>
      <!-- Post data -->
      <p>by <a><strong><?php echo $row["Authorname"];  ?></strong></a>, <?php echo date("d-m-Y", strtotime( $row['Bpostdate']));   ?></p>
      <!-- Read more button -->
      <?php echo '  <a class="btn-md button" href="blogs-inside.php?id='. $row["Bid"].'">Read more</a>  '; ?>

    </div>
    <!-- Grid column -->

  </div>
  <!-- Grid row -->

  <hr class="my-5">

  <?php   }  ?>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>RAIT ACM<br>STUDENT CHAPTER</h3>
            <p>
              Ramrao Adik Institute Of Technology,<br>
                Nerul,<br> Navi Mumbai. <br><br>
              <strong>Phone:</strong> +91 7208363177<br>
              <strong>Email:</strong> rait.ac.in<br>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="events.html">Events</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="teams.html">Team</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="blogs.html">Blogs</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Domains</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Technical</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Editorial</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Publicity</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Creative</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Social Media</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>JOIN RAIT ACM TODAY</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            
            <a href="#">Join Us</a>
          </div>

        </div>
      </div>
    </div>

    <div class="container">

      <div class="copyright-wrap d-md-flex py-4">
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright">
            &copy; Copyright <strong><span>RAIT ACM STUDENT CHAPTER 2021.</span></strong> All Rights Reserved
          </div>
        </div>
        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  <div id="preloader"></div>

  <!-- JS Files -->
  <script src="assets/vendor/purecounter/purecounter.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>

