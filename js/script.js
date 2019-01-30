// Маска для телефона
$(function(){
    $(".phone").mask("+7 999 999 99");
});
// Модальные окна
$(document).ready(function() {
    $('.modal-link, .link-modal_btn').click(function(e) {
        e.preventDefault();
        $('.modal').fadeOut('200');
        if ($(window).width() < 641) {
            $(".btn-menu").removeClass("open");
            $("#main-header").removeClass("open");
            $('html').removeClass("fixed");
            $(".main-header_item.main-menu, .main-header_item.main-header_contacts").fadeOut(200);
        };

        var id = '#' + $(this).attr('data-href');
        var id2 = $(this).offset().top,
            height = window.innerHeight / 2;

        $('html,#main-header').addClass('fixed');
        $('#overlay').fadeIn(200);
        $(id).fadeIn(200);
        $(id).css('top', window.scrollY + height + 'px');
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('#overlay, .modal').fadeOut(200);
        $('html,#main-header').removeClass('fixed');
    });

    $('body').on('click', '#overlay', function(event) {
        event.preventDefault();
        $('#overlay, .modal').fadeOut('200');
        $('html').removeClass('fixed');
    });
});
// Скролл и шапка
$('a.js-nav-link').click(function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + -110 + "px"
    }, {
        duration: 800
    });
});
$('a.js-nav-link-2').click(function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + -150 + "px"
    }, {
        duration: 800
    });
});
// Слайдер с отзывами
$(document).ready(function() {
    $('#section-3_slider').owlCarousel({
        margin:0,
        nav:true,
        autoplay:false,
        loop: true,
        itemElement:'div',
        dots: false,
        navClass:[ 'slider-arrow-left', 'slider-arrow-right'],
        responsive: {
            0: {
                items: 1,
            }
        }
    });
});