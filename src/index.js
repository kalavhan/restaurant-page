import _ from 'lodash';
import './css/reset.css';
import './css/main.css';
import createNav from './nav';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const content = document.getElementById('content');
content.appendChild(createNav());

let currentPage = createHome();
content.appendChild(currentPage);

document.getElementById('homeBtn').addEventListener('click', () => {
  content.removeChild(currentPage);
  currentPage = createHome();
  content.appendChild(currentPage);
});

document.getElementById('menuBtn').addEventListener('click', () => {
  content.removeChild(currentPage);
  currentPage = createMenu();
  content.appendChild(currentPage);
});

document.getElementById('contactBtn').addEventListener('click', () => {
  content.removeChild(currentPage);
  currentPage = createContact();
  content.appendChild(currentPage);
})
