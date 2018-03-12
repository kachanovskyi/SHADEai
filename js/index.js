$(document).ready(function () {
    $(".navbar-brand").animate({"opacity": 1}, 600, function () {
        $("#navbar, .slide-1>.content").animate({"opacity": 1}, 600);
    });
    $('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({scrollTop: target.offset().top - 86}, 900);
                return false;
            }
        }
    });
    $('.header #toggleNavbar').on("click", function () {
        $('.header #navbar').css("display", "flex").animate({"top": "0", "opacity": "1"}, 300)
    });
    $('.header #closeNavbar').on("click", function () {
        $('.header #navbar').animate({"top": "86px", "opacity": "0"}, 300, function () {
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

var addJS_Node = function (text, s_URL, funcToRun, runOnLoad) {
    var D = document;
    var scriptNode = D.createElement('script');
    if (runOnLoad) {
        scriptNode.addEventListener("load", runOnLoad, false);
    }
    scriptNode.type = "text/javascript";
    if (text) scriptNode.textContent = text;
    if (s_URL) scriptNode.src = s_URL;
    if (funcToRun) scriptNode.textContent = '(' + funcToRun.toString() + ')()';
    $(document).on("mobileinit", function () {
        $.mobile.autoInitializePage = false;
    });
    var targ = D.getElementsByTagName('head')[0] || D.body || D.documentElement;
    targ.appendChild(scriptNode);
};

function hoverVideo(e) {
    console.log('play video');
    $('video', this).get(0).play();
}

function hideVideo(e) {
    console.log('pause video');
    $('video', this).get(0).pause();
}

if (/Android|IEMobile/i.test(navigator.userAgent)) {
    var videoSlide = $(".slide-3");
    var figure2 = videoSlide.hover(hoverVideo, hideVideo);
    var figure21 = videoSlide.click(hoverVideo);
} else if (/webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)) {
    // var video = $(".video");
    // var figure = video.hover(hoverVideo, hideVideo);
    // var figure1 = video.click(hoverVideo);
    // $("video").prop('muted', true);
}