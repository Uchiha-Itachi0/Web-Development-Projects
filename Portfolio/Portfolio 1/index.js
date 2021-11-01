$(document).ready(function () {
    const toggle = $('.toggle')
    const nav_links = $('nav .nav-container .nav-links')
    const links = $('.nav-links ul li a')
    let typing_span = $('.typing-text span')
    const scrollTopButton = $(".scroll-top");

    $(window).scroll(function () {

        if (this.scrollY > 500) {
            scrollTopButton.css("display", "block");
        }
        else {
            scrollTopButton.css("display", "none");

        }
    });

    scrollTopButton.click(function () {
        $('html').animate({ scrollTop: 0 });
    });


    toggle.click(function () {
        toggle.toggleClass("active");
        nav_links.toggleClass("active");
    })


    var typed = new Typed(".typing-text span", {
        strings: ["Developer", "Designer", "Freelancer", "Python fanatic"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    links.click(function () {
        console.log('on');
        toggle.removeClass('active');
        nav_links.removeClass('active');
    })

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    $('.home-container .img-container').ripples({
        blurRadius: 20,
        perturbance: 0.02
    })
});