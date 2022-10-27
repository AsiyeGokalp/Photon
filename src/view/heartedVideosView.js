'use strict';

const gallery = document.querySelector('.gallery');

export async function createdHeartedVid() {
  gallery.innerHTML = '';
  const heartedVideos = JSON.parse(localStorage.getItem('heartedVideo'));

  heartedVideos.forEach((element) => {
    const galleryImg = document.createElement('div');
    galleryImg.classList.add('gallery-img');
    galleryImg.innerHTML = `
    

  <a id="heart-video" data-name="heartedVideo"><ion-icon name="heart"></ion-icon></a> 
  <video class="video" height="400" src="${element}" loop type="video/mp4"></video>

            `;
    gallery.appendChild(galleryImg);
  });

  const clip = document.querySelectorAll('.video');

  for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener('mouseenter', (e) => {
      return clip[i].play();
    });
    clip[i].addEventListener('mouseout', (e) => clip[i].pause());
  }
}

