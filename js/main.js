const slider = document.querySelector('#slider');
const sliderTop = document.querySelector('#sliderTop');
const sliderItems = Array.from(slider.children);
const sliderItemsTop = Array.from(sliderTop.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const first = document.getElementById('features__page-first');

sliderItems.forEach(function(slide, index) {

  if (index !== 0) {
    slide.classList.add('block__off')
  }

  slide.dataset.index = index;
 
  sliderItems[0].setAttribute('data-active', '');

  slide.addEventListener('click', function() {
    showNextSlide ('next');
  });
});

sliderItemsTop.forEach(function(slide, index) {

  if (index !== 0) {
    slide.classList.add('block__off-slider-top')
  }

  slide.dataset.index = index;

  sliderItemsTop[0].setAttribute('data-active', '');

  slide.addEventListener('click', function() {
    showNextSlideTop ('next');
  });
});



function showNextSlide (derection) {
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('block__off');
  currentSlide.removeAttribute('data-active')

  let nextSlideIndex;

  if (derection === 'next') {
    if (currentSlideIndex + 1 === sliderItems.length) {
      nextSlideIndex = 0;
      
    } else {
      nextSlideIndex = currentSlideIndex + 1;
      
    }
  } else if (derection == 'prev') {
    if (currentSlideIndex  === 0) {
      nextSlideIndex = sliderItems.length -1;
    } else {
      nextSlideIndex = currentSlideIndex - 1;
    }
  }

  first.innerHTML = `0${nextSlideIndex + 1}`

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('block__off');

    nextSlide.setAttribute('data-active', '');
}

function showNextSlideTop (derection) {
  const currentSlideTop = sliderTop.querySelector('[data-active]');
  const currentSlideIndexTop = +currentSlideTop.dataset.index;
  currentSlideTop.classList.add('block__off-slider-top');
  currentSlideTop.removeAttribute('data-active')

  let nextSlideIndexTop;

  if (derection === 'next') {
    if (currentSlideIndexTop + 1 === sliderItemsTop.length) {
      nextSlideIndexTop = 0;
    } else {
      nextSlideIndexTop = currentSlideIndexTop + 1;
      
    }
  } else if (derection == 'prev') {
    if (currentSlideIndexTop  === 0) {
      nextSlideIndexTop = sliderItemsTop.length -1;
    } else {
      nextSlideIndexTop = currentSlideIndexTop - 1;
    }
  }


  const nextSlideTop = sliderTop.querySelector(`[data-index="${nextSlideIndexTop}"]`);
    nextSlideTop.classList.remove('block__off-slider-top');

    nextSlideTop.setAttribute('data-active', '');
}



btnNext.onclick = function () {
  showNextSlide ('next');
};

btnPrev.onclick = function () {
  showNextSlide ('prev');
};



///