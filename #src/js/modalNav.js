let aboutModalWindow = document.querySelector('.header__modal-about'),
aboutModalButton = document.querySelector('.site-navigation__link--modal');

aboutModalButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    aboutModalWindow.classList.toggle('header__modal-about--opened');
});