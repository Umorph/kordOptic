let cardsCollection = document.querySelectorAll('.lens-card')

function toggleActiveCard(card) {
  cardsCollection.forEach(elem => {
    if (elem.classList.contains('lens-card--active')) {
      elem.classList.remove('lens-card--active')
    }
  })
  card.classList.add('lens-card--active')
}
