<?php
    require_once('connectiondb.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Events</title>
    <meta content="Events by RAIT ACM STUDENT CHAPTER" name="description" />
    <meta
      content="CODEJAM , Prequel to Perfection, techfest, Workshops, webinars, hour of code, hackthon, codethon, raitacm , rait,  "
      name="keywords"
    />
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

  <link href="assets/css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/event.css">
  <link rel="stylesheet" href="assets/css/modal.css">
  <link rel="stylesheet" href="assets/css/pagination.css">


</head>

<body>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top header-inner-pages">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="index.html"><img src="assets/img/acmlogo.png"></a></h1>
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto " href="index.html#home">Home</a></li>
          <li><a class="nav-link scrollto" href="index.html#about">About</a></li>
          <li><a class="nav-link scrollto" href="index.html#domain">Domains</a></li>
          <li><a class="nav-link scrollto " href="events.php">Events</a></li>
          <li><a class="nav-link scrollto" href="teams.html">Team</a></li>
          <li><a class="nav-link scrollto" href="blogs.php">Blogs</a></li>
          <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="Member/index.php">Login</a></li>
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
                title="Event Video"
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

function setStatusClass($sdate) {
  $date1 = new DateTime($sdate);
  $date2 = new DateTime();
$status = $date1 < $date2 ? "past" : "upcoming";
  return $status;
}
                    $sql = "SELECT * FROM events ORDER BY start_date DESC";
                    $result = $conn->query($sql);
                    $a = 1;
                    while ($row = $result->fetch_assoc()) {
        ?>

          <div
          class="col-lg-12 col-md-6 portfolio-item  
          filter-<?php  echo setStatusClass($row['start_date']);  ?>" 
          id = "event-<?php echo $row['e_id'];  ?>"
           >
            <div class="row row-container">
              <div class="col-lg-5">
                <div class="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                  <img class="featured-image"
                  src= ".<?php echo $row['image']; ?>"
                   alt="<?php echo $row['name'];  ?> Image"
                   onerror= "this.οnerrοr='';
                   this.src='assets/img/events/default/<?php $cat =  $row['event_type']; $eventType= (explode(' ', $cat)[0]); echo strtolower($eventType); ?>-default.webp'" 
                   >                   <!-- pass category and id to map default poster  -->
                </div>
              </div>
              <div class="col-lg-7">
  <!-- Category   --> 
                <a  class="green-text" >
                  <h6 class="font-weight-bold mb-3"><i class="fas fa-utensils pr-2"></i><?php  echo $row['event_type'];  ?></h6>
                </a>
                <!-- Post title -->
                <h3 class="font-weight-bold mb-3"><strong><?php echo $row['name'];  ?> </strong></h3>
                <p>
                <?php echo $row['description'];  ?>
                  </p>

                <p>📆 <strong>
                  <?php $sdate = date_create($row['start_date']);
                  $edate = date_create($row['end_date']); 
                  if($row['start_date'] != $row['end_date'] ){ echo date_format($sdate,"d M").' to '. date_format($edate,"d M Y");} 
                  else echo date_format($sdate,"d M Y") ; 
                  ;  ?>
                  </strong></p>

            <div class="button" style="display:  <?php $showBtn = $row['recording_link'] == '' ? 'none': 'block'; echo($showBtn) ;  ?> ;" 
            onclick="openModal(`<?php echo $row['recording_link'];  ?>`)">
              View Event
            </div>
            
              </div>

            </div>
          </div>
          
          <?php   }   ?>


          <!-- <script src="assets/js/pagination.js"></script> -->

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
            <li><i class="bx bx-chevron-right"></i> <a href="events.php">Events</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="teams.html">Team</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="blogs.php">Blogs</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Our Domains</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#domain">Technical</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#domain">Management</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#domain">Editorial</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#domain">Publicity</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#domain">Creative</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html#domain">Social Media</a></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6 footer-newsletter">
          <h4>JOIN RAIT ACM TODAY</h4>
          
          <a href="https://bit.ly/raitacm">Join Us</a>
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