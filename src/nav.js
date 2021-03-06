import img from './assets/logo.png';

function createNav() {
  const nav = document.createElement('nav');
  const navLogo = document.createElement('div');
  const navLogoImg = document.createElement('img');
  navLogoImg.src = img;
  navLogo.appendChild(navLogoImg);
  nav.appendChild(navLogo);
  const navUl = document.createElement('ul');
  const homeLi = document.createElement('li');
  const homeA = document.createElement('a');
  homeA.id = 'homeBtn';
  homeA.innerHTML = 'Home';
  homeLi.appendChild(homeA);
  const menuLi = document.createElement('li');
  const menuA = document.createElement('a');
  menuA.id = 'menuBtn';
  menuA.innerHTML = 'Menu';
  menuLi.appendChild(menuA);
  const contactLi = document.createElement('li');
  const contactA = document.createElement('a');
  contactA.id = 'contactBtn';
  contactA.innerHTML = 'Contact';
  contactLi.appendChild(contactA);
  navUl.appendChild(homeLi);
  navUl.appendChild(menuLi);
  navUl.appendChild(contactLi);
  nav.appendChild(navUl);
  return nav;
}

export default createNav;