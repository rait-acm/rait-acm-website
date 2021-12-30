<?php
    require_once('connectiondb.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Events</title>
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

  <link href="assets/css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/event.css">
  <link rel="stylesheet" href="assets/css/modal.css">
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top header-inner-pages">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="index.html"><img src="assets/img/acmlogo.png"></a></h1>
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto " href="index.html#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="index.html#about">About</a></li>
          <li><a class="nav-link scrollto" href="index.html#services">Domains</a></li>
          <li><a class="nav-link scrollto " href="events.php">Events</a></li>
          <li><a class="nav-link scrollto" href="teams.html">Team</a></li>
          <li><a class="nav-link scrollto" href="blogs.php">Blogs</a></li>
          <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="Login/index.php">Login</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- Navbar -->

    </div>
  </header><!-- End Header -->

  <main id="main">

 <section id="portfolio" class="portfolio">
   <!-- ============= modal for event recording ==================== -->
    <div id="myModal" class="modal">
          <span class="close cursor" onclick="closeModal()">&times;</span>
          <div class="modal-content">
            <div class="mySlides">
              <iframe
                width="100%"
                height="600"
                src=""
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Events</h2>
          <p>“An event is not over until everyone is tired of talking about it.” – Mason Cooley</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-upcoming">Upcoming</li>
              <li data-filter=".filter-past">Past</li>
              <!-- <li data-filter=".filter-ongoing">Web</li> -->
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

        <?php
                    $sql = "SELECT * FROM events";
                    $result = $conn->query($sql);
                    $a = 1;
                    while ($row = $result->fetch_assoc()) {
        ?>

          <div class="col-lg-12 col-md-6 portfolio-item filter-<?php echo strtolower($row['status']);  ?>">
       
            <div class="row row-container">

              <!-- Grid column -->
              <div class="col-lg-5">
          
                <!-- Featured image  add alternative link -->
                <div class="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                  <img class="featured-image"
                   src="<?php  $img_url = $row['image'] == "" || null ? "https://mdbootstrap.com/img/Photos/Others/img%20(28).jpg" : ".".$row['image']; echo $img_url ;  ?>" 
                   alt="<?php echo $row['name'];  ?>" alt="<?php echo $row['name'];  ?> Image">

                </div>
          
              </div>
              <div class="col-lg-7">
  <!-- Category   --> 
                <a  class="green-text">
                  <h6 class="font-weight-bold mb-3"><i class="fas fa-utensils pr-2"></i><?php  echo $row['event_type'];  ?></h6>
                </a>
                <!-- Post title -->
                <h3 class="font-weight-bold mb-3"><strong><?php echo $row['name'];  ?> </strong></h3>
                <!-- Excerpt -->
                <p>
                <?php echo $row['description'];  ?>
                  </p>

                <p>Event on: <strong><?php echo $row['start_date'];  ?> </strong></p>
                <!-- <a class="btn-md button">Read more</a> -->
            <div class="button" onclick="openModal(
              <?php $row['recording_link'];  ?> );">View Event</div>
            

              </div>
              <!-- Grid column -->
          
            </div>
          </div>

          <?php   }   ?>



          <div class="col-lg-12 col-md-6 portfolio-item filter-past ">
            <div class="row">

              <!-- Grid column -->
              <div class="col-lg-5">
          
                <!-- Featured image -->
                <div class="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                  <img class="featured-image"
                  src="https://mdbootstrap.com/img/Photos/Others/img%20(28).jpg" alt="Sample image">
                  
                </div>
          
              </div>
              <div class="col-lg-7">
                <!-- Category -->
                <a href="#!" class="green-text">
                  <h6 class="font-weight-bold mb-3"><i class="fas fa-utensils pr-2"></i>Food</h6>
                </a>
                <!-- Post title -->
                <h3 class="font-weight-bold mb-3"><strong>All 2</strong></h3>
                <!-- Excerpt -->
                <p>A wiki enables communities of editors and contributors to write contribute is a computer, Internet access, a web browser, and a basic understanding of a simple markup language (e.g. MediaWiki markup language). A single page in a wiki website is referred to as a "wiki page", while the entire collection of pages, which are usually well-interconnected by hyperlinks, is "the wiki". A wiki is essentially a database for creating, browsing, a djd judn</p>
                <!-- Post data -->
                <p>Event on: <strong>19/08/2018</strong></p>
                <!-- Read more button -->
                <div class="button"   onclick="openModal('https://www.youtube.com/embed/kzJBHiIBpfA?start=474');">View Event</div>
          
              </div>
              <!-- Grid column -->
          
            </div>
          </div>
          

         

        </div>
      </div>
    </section>

  </main>

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
            <strong>Email:</strong> reachraitacm@gmail.com<br>
          </p>
        </div>

        <div class="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#about">About us</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="events.html">Events</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="teams.html">Team</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="blogs.html">Blogs</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Our Domains</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Technical</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Management</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Editorial</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Publicity</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Creative</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Social Media</a></li>
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
        <a href="https://twitter.com/RaitACM" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/raitacm" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/rait_acm" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UC9kmsJxDB_nXdgYyY1-0K8w" class="youtube"><i class="bx bxl-youtube"></i></a>
        <a href="https://www.linkedin.com/in/rait-acm-student-chapter-034026197/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        <a href="https://github.com/rait-acm" class="github"><i class="bx bxl-github"></i></a>
      </div>
    </div>

  </div>
</footer>
<!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  <div id="preloader"></div>


  <!-- Vendor JS Files -->
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

  <script src="assets/js/modal.js"></script>
  <script src="assets/js/main.js"></script>
</body>

</html>