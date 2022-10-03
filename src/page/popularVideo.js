'use strict';

import { fetchApi } from './fetchApi.js';
import { generateVideo } from '../view/generateVideo.js';

const gallery = document.querySelector('.gallery');
const more = document.querySelector('.more');

export async function popularVideos() {
  gallery.innerHTML = '';

  const data = await fetchApi(
    'https://api.pexels.com/videos/popular?per_page=225&page=1'
  );

  generateVideo(data);
  more.classList.add('hide');
}
