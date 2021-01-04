function toggleMenu() {
  var nav = document.querySelector('nav');
  if (nav.classList.contains('menu--open')) {
    nav.classList.remove('menu--open');
  } else {
    nav.classList.add('menu--open');
  }
}

document.querySelector('nav button').addEventListener('click', toggleMenu);

function hamburgerIcon() {
  var hamburger = document.querySelector('nav button');
  if (hamburger.classList.contains('hamburgerOpen')) {
    hamburger.classList.remove('hamburgerOpen');
  } else {
    hamburger.classList.add('hamburgerOpen');
  }
}
document.querySelector('nav button').addEventListener('click', hamburgerIcon);

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left'); 
const thumbNav = document.querySelector('.carousel__nav')
const thumb = Array.from(thumbNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


//arrange the slides//

for (let i = 0; i < slides.length; i++) {
  slides[i].classList.add(`left-${(i)*400}`);
}
// left klik fotos gaan naar links//
// right klik fotos gaan naar rechts//
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.classList[nextSlide.classList.length-1].split('-')[1];
  //move to next slide
 track.classList.add(`transform-${amountToMove}`);
 currentSlide.classList.remove('current-slide');
 nextSlide.classList.add('current-slide');


})
// op thumbnail klikken gaat naar geklikte foto//