'use strict';

import { heartedDiv } from "./heartedView.js";

const gallery = document.querySelector('.gallery');

export async function createdHeartedVid() {
  gallery.innerHTML = '';
  const heartedVideos = JSON.parse(localStorage.getItem('heartedVideo'));
  heartedDiv(heartedVideos)

  // heartedVideos.forEach((element) => {
  //   const galleryImg = document.createElement('div');
  //   galleryImg.classList.add('gallery-img');
  //   galleryImg.innerHTML = `
    

  // <a id="heart-video" data-name="heartedVideo"><ion-icon name="heart"></ion-icon></a> 
  // <a class="video" height="400" src="${element}" loop type="video/mp4"></a>

  //           `;
  //   gallery.appendChild(galleryImg);
  //});

  // const clip = document.querySelectorAll('.video');
  // for (let item of clip) {
  //   item.addEventListener('mouseenter', (e) =>item.play());
  //   item.addEventListener('mouseout', (e) => item.pause());
  // }
}
