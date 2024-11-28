// const navBtn = document.querySelector('.nav-toggle');
// const nav = document.querySelector('.nav');
// const menuIcon = document.querySelector('.menu-icon');

// navBtn.onclick = function(){
//     nav.classList.toggle('nav-mobile')
//     menuIcon.classList.toggle('menu-icon-active');
//     document.body.classList.toggle('no-scroll');
// };

// document.querySelector('.menu-icon-wrapper').onclick = function(){
//     document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
// }

const menuIcon = document.querySelector('.menu-icon-wrapper');

menuIcon.addEventListener('click', () => {
  const menuIconElement = menuIcon.querySelector('.menu-icon');
  menuIconElement.classList.toggle('menu-icon-active');
});
