const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icon = document.querySelector('.navbar_icons' );

toggleBtn.addEventListener('click', () =>  {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});