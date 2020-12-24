let toggleButton = document.querySelector('.lens-type__toggle-button'),
toggleWindow = document.querySelector('.lens-type__list');

toggleButton.addEventListener('click', function(evt){
    toggleWindow.classList.toggle('lens-type__list--opened');
});