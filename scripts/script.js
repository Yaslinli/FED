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

