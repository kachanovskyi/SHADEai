$(document).ready(function () {

    // var src = "img/ChangeInsurancePlan.gif" + "?a=" + Math.random();
    // $("#saboDemo").attr("src", src);

    // document.getElementById("saboDemo").src = "img/ChangeInsurancePlan.gif" + "?a=" + Math.random();

    $(".navbar-brand").animate({
        "opacity": 1
    }, 600, function () {
        $("#navbar, .slide-1>.content").animate({
            "opacity": 1
        }, 600);
    });

    $('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 86
                }, 900);
                return false;
            }
        }
    });

    $('.header #toggleNavbar').on("click", function () {
        $('.header #navbar')
            .css("display", "flex")
            .animate({
                "top": "0",
                "opacity": "1"
            }, 300)
    });

    $('.header #closeNavbar').on("click", function () {
        $('.header #navbar')
            .animate({
                "top": "86px",
                "opacity": "0"
            }, 300, function () {
                $(this).css("display", "none")
            })
    });

    $('.features-carousel-indicators li').on("click", function () {
        $('.features-carousel-indicators li').removeClass('active');
        $(this).addClass('active');

        var features = $('#featuresCarousel');
        var slide = +$(this).data("slide-to");
        var video = features.find('.item .bot-video')[slide];

        features.carousel(slide);

        video.pause();
        video.currentTime = 0;
        video.load();
    })
});


function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

if (/Android|IEMobile/i.test(navigator.userAgent)) {
    var videoSlide = $(".slide-3");
    var figure2 = videoSlide.hover(hoverVideo, hideVideo);
    var figure21 = videoSlide.click(hoverVideo);
} else if (/webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)) {
    var video = $(".video");
    var figure = video.hover(hoverVideo, hideVideo);
    var figure1 = video.click(hoverVideo);
    $("video").prop('muted', true);
}

// if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//
//     var paraxifyInit = function () {
//         myParaxify = paraxify('.paraxify');
//     };
//
//     var loadScript = function (url, callback) {
//         var script = document.createElement("script");
//         script.type = "text/javascript";
//
//         if (script.readyState) { //IE
//             script.onreadystatechange = function () {
//                 if (script.readyState == "loaded" || script.readyState == "complete") {
//                     script.onreadystatechange = null;
//                     callback();
//                 }
//             };
//         } else { //Others
//             script.onload = function () {
//                 callback();
//             };
//         }
//
//         script.src = url;
//         document.getElementsByTagName("head")[0].appendChild(script);
//     };
//
//     loadScript("./js/paraxify.min.js", paraxifyInit);
// }
