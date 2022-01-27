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