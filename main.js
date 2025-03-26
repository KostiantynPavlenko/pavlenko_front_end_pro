const buttonsWrapper = document.querySelector('.buttons');

buttonsWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('button')){
    alert(`Pressed: ${event.target.textContent}`);
  }
});
