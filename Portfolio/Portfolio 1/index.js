const toggle = document.querySelector('.toggle')
const nav_links = document.querySelector('nav .nav-container .nav-links')
const links = document.querySelectorAll('.nav-links ul li a')
let typing_span = document.querySelector('.typing-text span')
const scrollTopButton = document.querySelector(".scroll-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        scrollTopButton.style.display = "block";
    }
    else {
        scrollTopButton.style.display = "none";

    }
}

scrollTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
})


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    nav_links.classList.toggle('active')
})


var typed = new Typed(".typing-text span", {
    strings: ["Developer", "Designer", "Freelancer", "Python fanatic"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


$('.home-container .img-container').ripples({
    blurRadius: 20,
    perturbance: 0.02
})

links.forEach(element => {
    element.addEventListener('click', () => {
        toggle.classList.remove('active')
        nav_links.classList.remove('active')
    })
})

 // owl carousel script
 $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});