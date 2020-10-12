let aboutModalWindow = document.querySelector('.header__modal-about'),
aboutModalButton = document.querySelector('.site-navigation__link--modal');

aboutModalButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    aboutModalWindow.classList.toggle('header__modal-about--opened');
});

let adaptiveNavWindow = document.querySelector('.modal-menu'),
adaptiveNavOpenButton = document.querySelector('.header__burger-button'),
adaptiveNavCloseButton = document.querySelector('.modal-menu__close-button');

adaptiveNavOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (adaptiveNavWindow.classList.contains('modal-menu--opened')) {
        document.body.classList.add('lock');
    } else {
        document.body.classList.remove('lock');
    }
    
    adaptiveNavWindow.classList.toggle('modal-menu--opened');
});

adaptiveNavCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    adaptiveNavWindow.classList.toggle('modal-menu--opened');
});