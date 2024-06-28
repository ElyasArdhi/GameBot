var slideIndex = 1;
    showSlide(slideIndex);

    function nextslide(n) {
        showSlide(slideIndex += n);
    }


    function showSlide(n) {
        var i;
        var slides = document.getElementsByClassName("slide");


        if (n > slides.length) {
            slideIndex = 1  
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }


        slides[slideIndex - 1].style.display = "block";


    }


    // NAVBAR MENU
    const NavBarNav = document.querySelector('.menu');
    // ketika hamburger menu 
    document.querySelector('#menu-icon').onclick = () => {
        NavBarNav.classList.toggle('active');
    };

    const hamburger = document.querySelector('#menu-icon');
    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !NavBarNav.contains(e.target)) {
            NavBarNav.classList.remove('active');
        };
    });