$(window).on('load', function() {
    $(".form input").val("");

    $(".form input").focusout(function () {
        if ($(this).val() != "") {
            $(this).addClass("focus");
        } else {
            $(this).removeClass("focus");
        }
    })
});

/* Crousel Scripts*/
$(".video-carousel").owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2,
            margin: 10,
        },
        600: {
            items: 2,
            margin: 16,
        },
        1024: {
            items: 3,
            margin: 12,
        },
        1025: {
            items: 3,
            margin: 18,
        }
    }
});


/* Crousel Scripts*/
$(".pricelist-carousel").owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 3,
            margin: 6,
        },
        600: {
            items: 4,
            margin: 10,
        },
        1024: {
            items: 6,
            margin: 8,
        },
        1025: {
            items: 6,
            margin: 12,
        }
    }
});

/* Crousel Price*/
$(".psx-carousel").owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 3,
            margin: 5,
        },
        600: {
            items: 5,
            margin: 5,
        },
        1024: {
            items: 7,
            margin: 5,
        },
        1025: {
            items: 7,
            margin: 5,
        }
    }
});

var owl = $('.carousel-testi');
$('.testi-carousel .arrow-left').click(function () {
    owl.trigger('prev.owl.carousel');
});
$('.testi-carousel .arrow-right').click(function () {
    owl.trigger('next.owl.carousel');
}); 

function playPause() {
    var video = document.querySelector("#myVideo");
    if (video.paused){
        video.play();
        $('.play').addClass("plo");
    }
    else{
        video.pause();
        $('.play').removeClass("plo");
    }
}


/*side-nav*/
$(".side-nav-opener").click(function () {
    $(".side-nav").addClass("side-nav-opened");
    $("body").addClass("lock");
    $(".side-nav-opened").bind("click", function () {
        $(".side-nav").removeClass("side-nav-opened");
        $("body").removeClass("lock");
    });
});
$(".side-nav .box").click(function (e) {
    e.stopPropagation();
});
$(".side-dot-nav-opener").click(function () {
    $(".side-nav").addClass("side-nav-opened");
    $("body").addClass("lock");
    $(".side-nav-opened").bind("click", function () {
        $(".side-nav").removeClass("side-nav-opened");
        $("body").removeClass("lock");
    });
});