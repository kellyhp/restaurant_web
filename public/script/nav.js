responsiveNavItems.map(function (responsiveNavItem) {
  responsiveNavItem.addEventListener('click', nav_link_click);
});

function nav_link_click() {
  const curr_active = document.getElementsByClassName('navbar-nav').getElementsByTagName('li').getElementsByClassName('active');
  curr_active[0].classList.remove('active');
  this.classList.add('active');
}


