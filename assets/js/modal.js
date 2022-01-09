function openModal(url) {
  var frames = document.getElementsByTagName("iframe");
  alert(frames[0].src);
  let vSrc = verifyLink(url);
  frames[0].src = vSrc;
  document.getElementById("myModal").style.display = "block";
}

function verifyLink(link) {
  let arr = link?.split("/");
  // console.log(link, "arr", arr);
  if (arr.includes("embed")) {
    return link;
  }
  return "https://www.youtube.com/embed/z0EXPWQgLFo";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  var frames = document.getElementsByTagName("iframe");
  frames[0].src = "";
}

// function errorVid() {
//   var frames = document.getElementsByTagName("iframe");
//   alert("error fixing");
//   let vSrc = "https://www.youtube.com/embed/z0EXPWQgLFo";
//   frames[0].src = vSrc;
// }

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("demo");
  // var captionText = document.getElementById("caption");
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
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}
