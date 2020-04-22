import _ from 'lodash';

function createNav(){
  const nav = document.createElement('nav');
  const navLogo = document.createElement('div');
  const navLogoImg = document.createElement('img');
  navLogoImg.src = '../src/assets/logo.png';
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
  navUl.appendChild(homeLi);
  navUl.appendChild(menuLi);
  nav.appendChild(navUl);
  console.log(nav);
  return nav;
};

const content = document.getElementById('content');
content.appendChild(createNav());
const heroHeader = document.createElement('div');
const weAre = document.createElement('div');
const ubication = document.createElement('div');
