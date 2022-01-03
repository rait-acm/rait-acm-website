<!DOCTYPE html>
                            <html lang="en">
                            
                            <head>
                              <meta charset="utf-8">
                              <meta content="width=device-width, initial-scale=1.0" name="viewport">
                            
                              <title>Login</title>
                              <meta content="Member Login | RAIT ACM STUDENT CHAPTER" name="description">
                              <meta content="members, raitacm, membership card, achivements, " name="keywords">
                            
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
                                <link rel="stylesheet" href="../assets/css/login.css">
                                <style>
                                   .button input{
                                    background: transparent;
                                    border: none; 
                                    color: white;
                                  }
                                  .button:hover input{
                                    color: black;
                                  }
                                </style>
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
                                      <li><a class="getstarted scrollto" href="index.php">Login</a></li>
                                    </ul>
                                    <i class="bi bi-list mobile-nav-toggle"></i>
                                  </nav><!-- Navbar -->
                            
                                </div>
                              </header><!-- End Header -->
                            
                              <main id="main">
                             <section id="login" class="login">
                                <div class="container">
                                  <img src="../assets/img/LOGIN2.png" class="loginimg" alt="">
                                  <img src="../assets/img/membership-card.png" class="member-card" alt="">
                                    <div class="body d-md-flex align-items-center justify-content-between">
                                        <div class="box-1 mt-md-0 mt-5"> 
                                          <!-- <img src="assets/img/LOGIN2.png" class="loginimg" alt="">  -->
                                        </div>
                                        <div class=" box-2 d-flex flex-column h-100">
                                            <div class="mt-5 txtcontent">
                                                <p class="h-1 mt-1">Login, <br> to view your membership card and more</p>
                                                <div class="d-flex flex-column conttxt">
                                                    <form action="login(php).php" method="post">
                                                        <div class="row">
                                                            <?php if(isset($_GET['error'])) {  ?>
                                                              <h5 class = 'error'> <?php echo $_GET['error'];?></h5>
                                                            <?php }  ?>
                                                          <div class="col-md-12 form-group">
                                                            <input type="email" name="username" class="form-control" id="name" placeholder="Username" required>
                                                          </div>
                                                          <div class="col-md-12 form-group mt-3 md-0 mb-3">
                                                            <input type="password" class="form-control" name="password" id="email" placeholder="Password" required>
                                                          </div>
                                                        </div>
                                                      
                                                        <div class="forgotpass">
                                                            <a>Forgot Password?</a>
                                                        </div>
                                                        <div class="mt-3">
                                                            <div class="button" type="submit" value="Login" name="submit">
                                                                <input type="submit" value="Login" name="submit">
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <!-- <div class="mt-auto">
                                                <p class="footer txt mb-0 mt-md-0 mt-4">By register you agree with our <span class="p-color me-1">terms and conditions</span>and <span class="p-color ms-1">privacy policy</span> </p>
                                            </div> -->
                                        </div> 
                                        <!-- <span class="fas fa-times"></span> -->
                                    </div>
                                </div>
                                </section>
                                <!-- End Portfolio Section
                            
                              </main>End #main -->
                            
                              
                            
                              <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
                              <div id="preloader"><img src="/assets/img/preloader-acm-vit.gif"></div>
                            
                              <!-- Vendor JS Files -->
                              <script src="../assets/vendor/purecounter/purecounter.js"></script>
                              <script src="../assets/vendor/aos/aos.js"></script>
                              <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                              <script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
                              <script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                              <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
                              <script src="../assets/vendor/php-email-form/validate.js"></script>
                              <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'></script>
                                <script type='text/javascript' src=''></script>
                                <script type='text/javascript' src=''></script>
                            
                              <!-- Template Main JS File -->
                              <script src="../assets/js/main.js"></script>
                            
                            </body>
                            
                            </html>