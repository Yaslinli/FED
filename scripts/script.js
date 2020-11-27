function toggleMenu() {
  var nav = document.querySelector('nav.menu');
  if (nav.classList.contains('menu--open')) {
    nav.classList.remove('menu--open');
  } else {
    nav.classList.add('menu--open');
  }
}

document.querySelector('button.hamburger').addEventListener('click', toggleMenu);

function hamburgerIcon() {
  var hamburger = document.querySelector('button.hamburger');
  if (hamburger.classList.contains('hamburgerOpen')) {
    hamburger.classList.remove('hamburgerOpen');
  } else {
    hamburger.classList.add('hamburgerOpen');
  }
}
document.querySelector('button.hamburger').addEventListener('click', hamburgerIcon);
