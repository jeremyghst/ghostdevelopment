"user strict"

var slideIndex = 1;
showSlides(slideIndex);
showSlides2(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("visible");  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
  }
  slides[slideIndex-1].classList.add("visible"); 
  dots[slideIndex-1].classList.add("active");
}

function showSlides2(n){
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("visible");  
  }
  slides[slideIndex-1].classList.add("visible"); 
}

function removeDots(){
  var dotDiv = document.getElementsByClassName("dots")[0];
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dotDiv.classList.remove('visible');
    dots[i].classList.remove("active");
  }
}

function showDot(slideIndex){
    var dotDiv = document.getElementsByClassName("dots")[0];
  var dots = document.getElementsByClassName("dot");
  dotDiv.classList.add('visible');
  dots[slideIndex-1].classList.add("active");
}