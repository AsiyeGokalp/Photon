'use strict';

import { fetchApi } from './fetchApi.js';
import { generatePictures } from '../view/generatePicture.js';

const gallery = document.querySelector('.gallery');

export async function photographerPhotos(photoName) {
 
    gallery.innerHTML = '';
    const data = await fetchApi(
      'https://api.pexels.com/v1/curated?per_page=225&page=1'
    );
    const photos = data.photos.filter(
      (photo) => photo.photographer === photoName
    );
    const dataObject = { photos };
    generatePictures(dataObject);
 
}


