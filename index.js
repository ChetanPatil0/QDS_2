
document.querySelectorAll('.service').forEach(service => {
    let currentSlide = 0;
    const slides = service.querySelectorAll('.service-img-slide .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const slideWidth = slides[0].clientWidth;
        const offset = -currentSlide * slideWidth;
        service.querySelector('.service-img-slide').style.transform = `translateX(${offset}px)`;
    }

    function autoSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    setInterval(autoSlide, 5000);
    showSlide(currentSlide);
});

let OpenMenu = document.getElementById('OpenMenu');
let CloseMenu = document.getElementById('CloseMenu');
let NavItems = document.querySelector('.NavItems');

let OpenNavMenu = () => {
   OpenMenu.style.display="None";
   CloseMenu.style.display="block";
   NavItems.style.display="block";
   
}
let CloseNavMenu = () => {
   OpenMenu.style.display="block";
   CloseMenu.style.display="None";
   NavItems.style.display="none";
}