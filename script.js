// ======= MOBILE NAVIGATION TOGGLE =======

const hamburger = document.querySelector('.menu-toggle'); // icon-hamburger
const closeBtn = document.querySelector('.menu-close');   // icon-close
const nav = document.querySelector('.mobile-nav');        // nav container

// Show mobile menu
hamburger?.addEventListener('click', () => {
  nav?.classList.add('active');
  hamburger.style.display = 'none';
  closeBtn.style.display = 'block';
});

// Hide mobile menu
closeBtn?.addEventListener('click', () => {
  nav?.classList.remove('active');
  closeBtn.style.display = 'none';
  hamburger.style.display = 'block';
});
