function openModal(url) {
  var frames = document.getElementsByTagName("iframe");
  let vidioSrc =
    url != "" && url != null
      ? url
      : "https://www.youtube.com/embed/z0EXPWQgLFo";
  frames[0].src = vidioSrc;
  // url ?? "https://www.youtube.com/embed/z0EXPWQgLFo";
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  var frames = document.getElementsByTagName("iframe");
  frames[0].src = "";
  console.log(frames[0]);
  // frames[i].pause()
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}
