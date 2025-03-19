const imgelement = document.getElementById('main-img');
const changeImgButton = document.querySelector('.changeImgButton');

changeImgButton.addEventListener('click' ,() => {
  const randomNumber = Math.floor((Math.random() * 9) + 1);

  imgelement.src = `img/${randomNumber}.jpg`;
});