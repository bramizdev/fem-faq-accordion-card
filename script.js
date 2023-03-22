'use strict';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $$accordionBtns = $$('.accordion__btn');

const openResponse = (btn, response) => {
  btn.setAttribute('aria-expanded', true);
  response.setAttribute('aria-hidden', false);
};

const closeResponse = (btn, response) => {
  btn.setAttribute('aria-expanded', false);
  response.setAttribute('aria-hidden', true);
};

$$accordionBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const isExpanded = e.target.getAttribute('aria-expanded');
    const accordionBtn = e.target;
    const response = e.target.parentElement.children[1];
    if (isExpanded === 'false') {
      openResponse(accordionBtn, response);
      return;
    }
    closeResponse(accordionBtn, response);
  });
});
