import img from './assets/home.jpg';

const createHome = () => {
  const home = document.createElement('div');
  home.style.backgroundImage = `url(${img})`;
  home.classList.add('home');
  const slogan = document.createElement('div');
  slogan.classList.add('home-slogan');
  const sloganP = document.createElement('p');
  sloganP.innerHTML = '¡Enjoy delicious food!';
  slogan.appendChild(sloganP);
  home.appendChild(slogan);
  document.getElementById('contactBtn').classList.remove('active');
  document.getElementById('menuBtn').classList.remove('active');
  document.getElementById('homeBtn').classList.add('active');
  return home;
};

export default createHome;