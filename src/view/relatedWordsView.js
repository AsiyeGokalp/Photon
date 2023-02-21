'use strict';
import { searchPhotos } from '../../app.js';

const someWords = document.getElementById('related-words');
const buttonPrev = document.getElementById('slideBack')
const buttonNext = document.getElementById('slide')
const videoBtn = document.querySelector("#video-btn")
const imgBtn = document.querySelector(".img-btn")
const storedWords = JSON.parse(localStorage.getItem("searchedWords"))

if (!storedWords) {
  localStorage.setItem("searchedWords", JSON.stringify([]))
}

export function createRelatedWords(data) {

  const words = data.slice(0, Math.min(data.length, 15));

  words.map((element) => {
    const list = document.createElement('ul');
    list.classList.add('list');
    list.innerHTML = `
   <li class="word" data-word='${element.word}' >${element.word}</li>
   `;
    someWords.appendChild(list);
  });

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }
  buttonNext.addEventListener("click", () => {
    sideScroll(someWords, 'right', 25, 100, 15);
  })
  buttonPrev.addEventListener("click", () => {
    sideScroll(someWords, 'left', 25, 100, 15);
  })

  document.querySelectorAll('.list').forEach((item) => {
    item.addEventListener('click', (e) => {
      const search = e.target.dataset.word;
      videoBtn.classList.remove("hide")
      imgBtn.classList.remove("hide")
      if (!Object.values(storedWords).includes(search))
        storedWords.push(search)
      localStorage.setItem("searchedWords", JSON.stringify(storedWords))
      localStorage.setItem("currentSearch", JSON.stringify(search))
      return searchPhotos(search);

    });
  });
}
