'use strict';

import { generatePictures } from './generatePicture.js';

const gallery = document.querySelector('.gallery');

export async function createLeaderboard(data) {
  const names = [];
  data.photos.forEach((element) => {
    names.push(element.photographer);
  });
  const counts = {};

  for (let i = 0; i < names.length; i++) {
    if (counts[names[i]]) {
      counts[names[i]] += 1;
    } else {
      counts[names[i]] = 1;
    }
  }

  const name = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  name.forEach((item) => {

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name-div');
    nameDiv.dataset.name = item[0];
    nameDiv.innerHTML = `
      <h3 width ="1000px">${item[0]} has uploaded ${item[1]}  photos</h3><br>
      `;

    gallery.appendChild(nameDiv);

    const photos = data.photos.filter(
      (photo) => photo.photographer === item[0]
    );
    const dataObject = { photos };
    generatePictures(dataObject);
  });
}
