'use strict';

const gallery = document.querySelector('.gallery');
const storedImg = JSON.parse(localStorage.getItem('hearted'));

if (!storedImg) {
  localStorage.setItem('hearted', JSON.stringify([]));
}

export const generatePictures = (data) => {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement('div');
    if (Object.values(storedImg).includes(photo.src.original))
      galleryImg.classList.add('red');
    galleryImg.classList.add('gallery-img');
    galleryImg.setAttribute("id", "gallery-div")
    galleryImg.innerHTML = ` 

            <div class="gallery-info">
            <h3 class = "user" data-name="${photo.photographer}">${photo.photographer}</h3>
            <a id="heart" data-name="heart"><ion-icon class="icon" name="heart"></ion-icon></a>
            <a id="download" href='${photo.src.original}'><ion-icon name="download-outline"></ion-icon></a>
            </div>
            <img src=${photo.src.large}></img>

            <section class="modal" > 
            <div class="modal-content"> 
            <a class="more free-download" href='${photo.src.large}'>Free download</a>
              <span class="modal-close">&times;</span>
              
              <img src=${photo.src.original}></img>
            </div>
            </section>
            
            `;
    gallery.appendChild(galleryImg);
  });
}

document.addEventListener('click', (e) => {
  const heart = e.target.parentNode.dataset.name;
  const heartedImgUrl = e.target.parentNode.nextElementSibling.href;
  if (heart === 'heart') {

    if (storedImg.includes(heartedImgUrl)) {
      storedImg.splice(storedImg.indexOf(heartedImgUrl), 1);
      e.target.parentNode.parentNode.parentNode.classList.remove('red');
    } else {
      e.target.parentNode.parentNode.parentNode.classList.add('red');
      storedImg.push(heartedImgUrl);
    }
    localStorage.setItem('hearted', JSON.stringify(storedImg));
  }
});
