const sliderButtonsWrapper = document.querySelector('.slider__buttons-wrapper');
const sliderDotsWrapper = document.querySelector('.slider__dots');
const sliderImgElement = document.querySelector('.slider-img');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const imgList = ['stitch.png', 'dog1.png', 'horse1.png'];
const slidesCount = imgList.length - 1;
let imgCount = 0;

function renderSliderDots() {
  for(let i = 0; i < imgList.length; i++){
    const sliderDot = document.createElement('div');

    sliderDot.classList.add('slider-dot');
    sliderDot.setAttribute('data-dot-index', i);
    sliderDotsWrapper.appendChild(sliderDot);
  }
}

function renderSlider() {
  const sliderDots = document.querySelectorAll('.slider-dot');
  
  sliderImgElement.src = `img/${imgList[imgCount]}`;
  sliderDots[imgCount].classList.add('selected');
  prevButton.classList.add('disabled');
}

nextButton.addEventListener('click', e => {
  const sliderDots = document.querySelectorAll('.slider-dot');

  if (prevButton.classList.contains('disabled')) {
    prevButton.classList.remove('disabled');
  }

  imgCount++;

  if(imgCount <= slidesCount) {
    sliderImgElement.src = `img/${imgList[imgCount]}`;
    sliderDots.forEach(dot => dot.classList.remove('selected'));
    sliderDots[imgCount].classList.add('selected');
  }

  if (imgCount >= slidesCount) {
    e.target.classList.add('disabled');
  }
});

prevButton.addEventListener('click', e => {
  const sliderDots = document.querySelectorAll('.slider-dot');

  imgCount--;

  if (nextButton.classList.contains('disabled')) {
    nextButton.classList.remove('disabled');
  }

  if (imgCount <= 0) {
    e.target.classList.add('disabled');
  }

  if(imgCount >= 0) {
    sliderImgElement.src = `img/${imgList[imgCount]}`;
    sliderDots.forEach(dot => dot.classList.remove('selected'));
    sliderDots[imgCount].classList.add('selected');
  }
});

sliderDotsWrapper.addEventListener('click', e => {
  const sliderDots = document.querySelectorAll('.slider-dot');

  if (e.target.classList.contains('slider-dot')) {
    imgCount = +e.target.dataset.dotIndex;

    sliderDots.forEach(dot => dot.classList.remove('selected'));
    e.target.classList.add('selected');
    sliderImgElement.src = `img/${imgList[imgCount]}`;

    if (imgCount > 0 && imgCount < slidesCount) {
      nextButton.classList.remove('disabled');
      prevButton.classList.remove('disabled');
    }

    if(imgCount <= 0) {
      prevButton.classList.add('disabled');
      nextButton.classList.remove('disabled');
    }
    
    if(imgCount >= slidesCount) {
      nextButton.classList.add('disabled');
      prevButton.classList.remove('disabled');
    }
  }
})

// Main

renderSliderDots();
renderSlider();