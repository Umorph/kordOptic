let aboutModalWindow = document.querySelector('.header__modal-about'),
aboutModalButton = document.querySelector('.site-navigation__link--modal');

aboutModalButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    aboutModalWindow.classList.toggle('header__modal-about--opened');
});

// online store modal

let modalStoreWindow = document.querySelector('.modal-store'),
modalStoreToggleButton = document.querySelector('.header__store-link');

modalStoreToggleButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalStoreWindow.classList.toggle('modal-store--opened');
});

function closeModalWindow() {
    modalStoreWindow.classList.toggle('modal-store--opened')
}