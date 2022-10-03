'use strict';

import { searchPhotos } from '../../app.js';

const currentSearch = document.querySelector('#current-search');
const searchDownMenu = document.querySelector('.search-down');

export function createAutocomplete(data) {
  const words = data.slice(0, Math.min(data.length, 6));

  words.map((element) => {
    const list = document.createElement('ul');
    list.classList.add('list');
    list.innerHTML = `
   <li class="current" data-word='${element.word}' >${element.word}</li>
   `;
    currentSearch.appendChild(list);
  });

  document.querySelectorAll('.list').forEach((item) => {
    item.addEventListener('click', (e) => {
      const search = e.target.dataset.word;
      searchPhotos(search);
      searchDownMenu.classList.add('hide');
    });
  });
}
