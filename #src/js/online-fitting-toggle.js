const fittingModalWindow = document.querySelector('.online-fitting'),
  openButton = document.querySelector('.item-parameters__hint--online-fitting'),
  closeButton = document.querySelector('.online-fitting__close-button');

function toggleModal() {
  fittingModalWindow.classList.toggle('online-fitting--opened');
  document.body.classList.toggle('lock');
}

openButton.addEventListener('click', () => {
  toggleModal();
})

closeButton.addEventListener('click', () => {
  toggleModal();
})
