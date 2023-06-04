/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/bgset/ls.bgset';
import './component/head-desktop';
import '../styles/style.css';
import '../styles/responsive-style.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
});

const showPage = () => {
  document.querySelector('#loader').style.display = 'none';
  document.querySelector('#content').style.display = 'block';
  document.querySelector('footer').style.display = 'block';
};

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  showPage();
  app.renderPage();
  swRegister();
});
