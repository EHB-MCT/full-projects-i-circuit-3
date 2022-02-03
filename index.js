
// https://www.w3schools.com/howto/howto_js_slideshow.asp
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

// https://www.youtube.com/watch?v=vE4UuSzR5T0&list=TLPQMDMwMjIwMjJRAQUrC4EljQ&index=1
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    // let windowPosition = window.scrollY > 0;


    const heropos = document.querySelector('.hero').getBoundingClientRect().y;
    const heroHeight = document.querySelector('.hero').getBoundingClientRect().height;

    const offset = heropos + heroHeight;
    const overScrolled = window.scrollY > offset;
    header.classList.toggle('scrolling-active', overScrolled);

})
// https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
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

(function () {

    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".mynav a");
    const colors = ["#53FF45", "3590F3", "#FF7BAC", "#FFDD06", "darkblue", "cyan"];

    function mouseenterFunc() {
        if (!this.parentNode.classList.contains("active")) {
            for (let i = 0; i < links.length; i++) {
                if (links[i].parentNode.classList.contains("active")) {
                    links[i].parentNode.classList.remove("active");
                }
                links[i].style.opacity = "0.25";
            }

            this.parentNode.classList.add("active");
            this.style.opacity = "1";

            const width = this.getBoundingClientRect().width;
            const height = this.getBoundingClientRect().height;
            const left = this.getBoundingClientRect().left + window.pageXOffset;
            const top = this.getBoundingClientRect().top + window.pageYOffset;
            const color = colors[Math.floor(Math.random() * colors.length)];

            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            target.style.borderColor = color;
            target.style.transform = "none";
        }
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (e) => e.preventDefault());
        links[i].addEventListener("mouseenter", mouseenterFunc);
    }

    function resizeFunc() {
        const active = document.querySelector(".mynav li.active");

        if (active) {
            const left = active.getBoundingClientRect().left + window.pageXOffset;
            const top = active.getBoundingClientRect().top + window.pageYOffset;

            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
        }
    }

    window.addEventListener("resize", resizeFunc);

})();

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}