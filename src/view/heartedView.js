"use stric"

const gallery = document.querySelector('.gallery');

export const heartedDiv = (photos) => {
  photos.forEach((element) => {
    const galleryImg = document.createElement('div');
    galleryImg.classList.add('gallery-img');
    galleryImg.innerHTML = `
    

            <div class="gallery-info">
            <a id="heart" data-name="heart"><ion-icon name="heart"></ion-icon></a>
            <a id="download" href='${element}'><ion-icon name="download-outline"></ion-icon></a>
            </div>
            <a class="video" height="400" src="${element}" loop type="video/mp4"></a>
            

            `;
    gallery.appendChild(galleryImg);
  });
  const clip = document.querySelectorAll('.video');
  for (let item of clip) {
    item.addEventListener('mouseenter', (e) =>item.play());
    item.addEventListener('mouseout', (e) => item.pause());
  }
}

// {/* <a id="heart-video" data-name="heartedVideo"><ion-icon name="heart"></ion-icon></a> 
//   <img src=${element}></img> */}