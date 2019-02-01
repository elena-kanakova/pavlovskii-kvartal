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
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 800
    });
});
// Слайдер с отзывами
$(document).ready(function() {
    $('#section-3_slider').owlCarousel({
        margin:0,
        nav:true,
        navText: false,
        autoplay:false,
        loop: true,
        itemElement:'div',
        dots: false,
        navContainer: '#slider-nav .container',
        navClass:[ 'slider-arrow-left', 'slider-arrow-right'],
        responsive: {
            0: {
                items: 1,
            }
        }
    });
});
/* Яндекс карта */
ymaps.ready(init);

function init () {
    var map = new ymaps.Map("ymap", {
        // Центр карты, указываем коордианты
        center:[55.825962,37.140614],
        // Масштаб, тут все просто
        zoom: 16,
        // Отключаем все элементы управления
        controls: [],
        type: 'yandex#satellite'
    });

    var zoomControl = new ymaps.control.ZoomControl({options: { position: { right: 10, top: 200 }}});
    map.controls.add(zoomControl);

    map.behaviors.enable('drag');

    var myGeoObjects = [];

    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([55.825962,37.140614],{
        balloonContentBody: 'Жилой комплекс "Павловский квартал',
    },{
        iconLayout: 'default#image',
        // Путь до нашей картинки
        iconImageHref: 'img/map-logo.png',
        // Размер по ширине и высоте
        iconImageSize: [123, 134],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-35, -35]
    });

    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    map.geoObjects.add(clusterer);
    // Отлючаем возможность изменения масштаба
    map.behaviors.disable('scrollZoom');

    var position = map.getGlobalPixelCenter();map.setGlobalPixelCenter([ position[0] - 200, position[1] ]);
};
// Эффект для инпутов
$(document).ready(function() {
    $(".form-input").focusin(function () {
        $(this).find("img").animate({
            "opacity": "0"
        }, 200);
    });
    $(".form-input").focusout(function () {
        $(this).find("img").animate({
            "opacity": "1"
        }, 300);
    });
});
//Табы
$(function(){
    $(".section-8_item-content__nav").on("click", ".section-8_item-content__nav-btn", function(){

        var tabs = $(".section-8_item-content__nav .section-8_item-content__nav-btn"),
            cont = $(".section-8_item-content__item-wrap .section-8_item-content__item");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
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
//Мобильное меню
$(".btn-menu").click(function() {
    $(this).toggleClass("open");
    $("#mobile-menu").toggleClass("open");
});

$('.overlay').click(function() {
    $(".btn-menu, .main-menu, .menu-header, .menu-right-links, .menu-logo, .overlay").removeClass("open");
    $(".logo").removeClass("none");
});

$(".menu-item").click(function() {
    $('.btn-menu, .overlay').removeClass("open");
    $(".main-menu, .menu-header, .main-header, .menu-right-links").removeClass("open");
    $(".logo").removeClass("none");
});