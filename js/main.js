$(document).ready(function () {

    if (window.location.href.indexOf("works") > -1) {
        $(".navbar-menu__link").removeClass('active');
        $('a[href$="/#works"]').toggleClass('active');
    }


    var modal = document.getElementById("nav-modal");
    var hamburgerIcon = document.getElementById("hamburger-icon");
    hamburgerIcon.addEventListener("click", navOpen);

    function navOpen() {
        hamburgerIcon.classList.toggle("open");
        modal.classList.toggle("open");
        $("#js-nav-container").toggleClass("nav-open");
    }

    $(".modal-content ul li > a").click(function(){
        modal.classList.remove("open");
        $("#js-nav-container").removeClass("nav-open");
    });
});