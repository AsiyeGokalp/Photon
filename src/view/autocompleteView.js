'use strict';

import { searchPhotos } from '../../app.js';
import { relatedWords } from '../page/relatedWords.js';

const currentSearch = document.querySelector('#current-search');
const searchDownMenu = document.querySelector('.search-down');
const searchInput = document.querySelector(".search-input")
const videoBtn = document.querySelector("#video-btn")
const imgBtn = document.querySelector(".img-btn")

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
      searchInput.value = search
      videoBtn.classList.remove("hide")
      imgBtn.classList.remove("hide")
      searchPhotos(search);
      relatedWords(search)
      searchDownMenu.classList.add('hide');
    });
  });
}
