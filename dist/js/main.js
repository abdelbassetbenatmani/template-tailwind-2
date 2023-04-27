const logo = document.querySelector('.logo img')
const list = document.querySelector('nav ul')
const btn = document.getElementById('menu-btn')

window.addEventListener('scroll', function() {
    const navBar = document.getElementById('navbar');
    const sticky = navBar.offsetTop;
    
    if (window.pageYOffset > sticky) {
        navBar.classList.add("sticky");
      } else {
        navBar.classList.remove("sticky");
      }
    // === logo change
    if (navBar.classList.contains("sticky")) {
        logo.src = "./images/logo.svg";
      } else {
        logo.src = "./images/logo-white.svg";
      }
  });

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})  
  