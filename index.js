const refs = {
  sliderBody: document.querySelector('.slider__body'),
  sliderBodyImages: document.querySelectorAll('.slider__body img'),
  prevBtn: document.querySelector('#prevBtn'),
  nextBtn: document.querySelector('#nextBtn'),
};

let imgWidth = refs.sliderBodyImages[0].clientWidth;
let maxWidth = refs.sliderBodyImages.length * imgWidth;
let currentWidth = 0;

function checkLimit() {
  if (currentWidth === maxWidth - imgWidth) {
    refs.nextBtn.classList.add('inactive');
    refs.nextBtn.disabled = true;
  } else {
    refs.nextBtn.classList.remove('inactive');
    refs.nextBtn.disabled = false;
  }

  if (currentWidth === 0) {
    refs.prevBtn.classList.add('inactive');
    refs.prevBtn.disabled = true;
  } else {
    refs.prevBtn.classList.remove('inactive');
    refs.prevBtn.disabled = false;
  }
}

checkLimit();

refs.nextBtn.addEventListener('click', () => {
  currentWidth += imgWidth;

  console.log(currentWidth);
  refs.sliderBody.style.transform = `translateX(-${currentWidth}px)`;
  checkLimit();
});

refs.prevBtn.addEventListener('click', () => {
  currentWidth -= imgWidth;

  console.log(currentWidth);
  refs.sliderBody.style.transform = `translateX(-${currentWidth}px)`;
  checkLimit();
});
