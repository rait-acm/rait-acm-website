<?php 
include 'login(php).php';
if(isset($_SESSION['user_name']))
{
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Dashboard</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="../assets/img/acmlogo.png" rel="icon">
  <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="../assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="../assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="../assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <!-- <link href="assets/css/style.css" rel="stylesheet"> -->
  <link rel="stylesheet" href="../assets/css/dashboard1.css">

</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top header-inner-pages">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="../index.html"><img src="../assets/img/acmlogo.png"></a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto " href="../index.html#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="../index.html#about">About</a></li>
          <li><a class="nav-link scrollto" href="../index.html#services">Domains</a></li>
          <li><a class="nav-link scrollto " href="../events.php">Events</a></li>
          <li><a class="nav-link scrollto" href="../teams.html">Team</a></li>
          <li><a class="nav-link scrollto" href="../blogs.php">Blogs</a></li>
          <li><a class="nav-link scrollto" href="../index.html#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="logout.php">Logout</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- Navbar -->

    </div>
  </header><!-- End Header -->

  <main id="main">

    <section id="about" class="about">
        <div class="container">
  
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
              <img src="../assets/img/dashboard-1.png" class="img-fluid dashboardimg" alt="">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
              <h1>Welcome, <br> <?php echo $_SESSION['name'] ?></h1>
              <h4><?php echo $_SESSION['post'] ?></h4>
              <!-- <p class="fst-italic">Association for Computing Machinery (ACM) is the world's largest educational and scientific computing society, delivers resources that advance computing as a science and profession. ACM has 650 student chapters worldwide.RAIT ACM is a Student Chapter of the elite international level ACM organization.  RAIT-ACM is a committee focused towards the development and progress of students in RAIT. We work in different fields like Technical, Creative, Publicity, Video Editing, Management, Social Media and Editorial.</p> -->
              <!-- <ul>
                <li><i class="bi bi-chevron-double-right"></i> </li>
                <li><i class="bi bi-chevron-double-right"></i>
                </li>
                <li><i class="bi bi-chevron-double-right"></i>
                </li>
              </ul> -->
              <div class="button">
                <a class="btn-md dashboard-button" onclick = "window.location.href= 'memcard.php';">View Card</a>
                <div class="dropdown">
                  <button class="dropbtn">View Achievements</button>
                  <div class="dropdown-content">
                    <a href='Download(backend).php?file=<?php echo $_SESSION['password']; ?>'>Hour of Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section><!-- End About Section -->

  </main>
  <!-- End #main -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="../assets/vendor/purecounter/purecounter.js"></script>
  <script src="../assets/vendor/aos/aos.js"></script>
  <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="../assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="../assets/js/main.js"></script>

</body>

</html>

<?php 
}
else
{
    header("location : index.php");
}
?>