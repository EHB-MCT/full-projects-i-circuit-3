var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}


window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    // let windowPosition = window.scrollY > 0;


    const heropos = document.querySelector('.hero').getBoundingClientRect().y;
    const heroHeight = document.querySelector('.hero').getBoundingClientRect().height;

    const offset = heropos + heroHeight;
    const overScrolled = window.scrollY > offset;
    header.classList.toggle('scrolling-active', overScrolled);

})

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
}

// Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
    }
}

// Four images side by side
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
}