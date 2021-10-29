const toggle = document.querySelector('.toggle')
const nav_links = document.querySelector('nav .nav-container .nav-links')
let typing_span = document.querySelector('.typing-text span')
let text = ['FullStack Developer', 'DSA | ML | PYTHON Enthusiadt', 'Graphic Designer', 'Always Learning new thing']
let speed = 100
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

