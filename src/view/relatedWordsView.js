'use strict';
import { searchPhotos } from '../../app.js';

const currentSearch = document.querySelector('#current-search');
const someWords = document.getElementById('related-words');

export function createRelatedWords(data) {
  const words = data.slice(0, Math.min(data.length, 10));

  words.map((element) => {
    const list = document.createElement('ul');
    list.classList.add('list');
    list.innerHTML = `
   <li class="word" data-word='${element.word}' >${element.word}</li>
   `;
    someWords.appendChild(list);
  });

  document.querySelectorAll('.list').forEach((item) => {
    item.addEventListener('click', (e) => {
      const search = e.target.dataset.word;
      currentSearch.innerHTML = search;
      return searchPhotos(search);
    });
  });
}
