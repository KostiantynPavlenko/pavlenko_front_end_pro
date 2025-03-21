const buttonColorSwitcher = document.querySelector('.color-switcher-button');
const headerText = document.querySelector('.header-text');

buttonColorSwitcher.addEventListener('click', () => {
  headerText.classList.toggle('yellow-text');
})