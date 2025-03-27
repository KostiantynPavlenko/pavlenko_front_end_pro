const buttons = document.querySelector('.buttons-wrapper');

let url = '';

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('enter-url')) {
    url = prompt('Enter URL');
  }

  if (e.target.classList.contains('relocate')) {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('You didn\'t provide correct URL');
    }
  }
})