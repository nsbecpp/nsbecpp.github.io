//menu button script
function menubtn(x) {    
    x.classList.toggle("change");
    
    var open = document.querySelector('.sidebar');
    if (open.style.width === '200px') {
        open.style.width = '0';
    }
    else {
        open.style.width = '200px';
        open.style.display === 'block'
    }
       
    
}

function nav_close() {
    var close = document.querySelector('.sidebar');
    if (close.style.width === '200px') {
        close.style.width = '0';    
        toggle.classList.toggle("change");
    }
}

// Variable to hold current div element to be used in slideshow
var identifier = document.getElementById("expand-1"); // just random element to start with

function imagebtn(y) {
    x = y.getElementsByClassName('show')[0];
    x.classList.toggle("hide");
    x.classList.toggle("reveal");
      
    identifier = y;
    showSlides(1, identifier);
}


function openModal() {
    var mod = document.querySelector('.modal');
    mod.style.display = "block";
}

function closeModal() {
    var mod = document.querySelector('.modal');
    mod.style.display = "none";    
    //document.getElementsByClassName('modal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex, identifier);

function plusSlides(n) {
    showSlides(slideIndex += n, identifier);
}

function currentSlide(n) {
    showSlides(slideIndex = n, identifier);
}

function showSlides(n, identifier) {
    var i;
    var slides = identifier.querySelectorAll('.modal-slides');
    var dots = identifier.getElementsByClassName("demo");
    //var slides = document.getElementsByClassName('.modal-slides');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
  }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


// Drop down menu script

function dropdown(y) {
    document.getElementById(y).classList.toggle("dshow");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropcontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dshow')) {
        openDropdown.classList.remove('dshow');
      }
    }
  }
}
