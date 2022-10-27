'use strict';

const gallery = document.querySelector('.gallery');

export async function createdHeartedImg() {
  gallery.innerHTML = '';
  const heartedPhotos = JSON.parse(localStorage.getItem('hearted'));

  heartedPhotos.forEach((element) => {
    const galleryImg = document.createElement('div');
    galleryImg.classList.add('gallery-img');
    galleryImg.innerHTML = `
    
            <div class="gallery-info">
            <a id="heart" data-name="heart"><ion-icon name="heart"></ion-icon></a>
            <a id="download" href='${element}'><ion-icon name="download-outline"></ion-icon></a>
            </div>
            <img src=${element}></img>

            `;
    gallery.appendChild(galleryImg);
  });
}
