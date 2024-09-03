// header__top-row--mobile
//
// nav-icon-active

const navButton = document.querySelector('.nav-icon-btn');
const navIcon = navButton.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navButton.addEventListener('click', ()=> {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
})

// Phone mask

mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach((item) => {
    item.addEventListener('focusout', () => {
        if (item.value === "+") item.value = "";
    })
})

// Yandex map

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543,30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.943543,30.338928], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map/location-pin.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });
}