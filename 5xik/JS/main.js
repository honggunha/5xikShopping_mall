const toggleBtn = document.querySelector('.navbar-toggler-icon');
const menu = document.querySelector('.side');


toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
  icons.classList.toggle('active')
})