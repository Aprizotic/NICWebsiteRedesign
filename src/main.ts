import './assets/css/main.scss'

const previousButton = document.querySelector('[data-js="previous-button"]');
const nextButton = document.querySelector('[data-js="next-button"]');
const images = document.querySelectorAll('.carousel__img');

nextButton.addEventListener('click', () => {
  let index: number;

  images.forEach((image, i) => {
    if (!image.classList.contains('hidden')) {
      index = i;
    }
  });

  images.forEach(image => {
    image.classList.add('hidden');
  });

  if (index !== 4) {
    images[index + 1].classList.remove('hidden');
  } else {
    images[0].classList.remove('hidden');
  }
});

previousButton.addEventListener('click', () => {
  let index: number;

  images.forEach((image, i) => {
    if (!image.classList.contains('hidden')) {
      index = i;
    }
  });

  images.forEach(image => {
    image.classList.add('hidden');
  });

  if (index !== 0) {
    images[index - 1].classList.remove('hidden');
  } else {
    images[4].classList.remove('hidden');
  }
});