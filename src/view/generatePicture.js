'use strict';

const gallery = document.querySelector('.gallery');

export const generatePictures = (data) => {


  data.photos.forEach((photo) => {
    const galleryImg = document.createElement('div');
    galleryImg.classList.add('gallery-img');
    galleryImg.setAttribute("id","gallery-div")
    galleryImg.innerHTML = `
    

            <div class="gallery-info">
            <h3 class = "user" data-name="${photo.photographer}">${photo.photographer}</h3>
            <a id="heart" data-name="heart"><ion-icon name="heart"></ion-icon></a>
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



const storedImg = JSON.parse(localStorage.getItem('hearted'));

if (!storedImg) {
  localStorage.setItem('hearted', JSON.stringify([]));
}

document.addEventListener('click', (e) => {
  const heart = e.target.parentNode.dataset.name;
  const heartedImgUrl = e.target.parentNode.nextElementSibling.href;
console.log(heartedImgUrl)
  if (heart === 'heart') {
    e.target.classList.add('red');
    if (storedImg.includes(heartedImgUrl)) return;
    storedImg.push(heartedImgUrl);
    localStorage.setItem('hearted', JSON.stringify(storedImg));
  }
});
