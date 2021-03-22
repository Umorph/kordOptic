function toggleWindow(item) {
  item.classList.toggle('vacancy__name--opened');

  let itemWindow = item.parentNode.querySelector('.vacancy__inner');
  itemWindow.classList.toggle('vacancy__inner--opened');
}

let test = document.querySelector('.vacancy__name');
