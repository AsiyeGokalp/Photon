'use strict';

const gallery = document.querySelector('.gallery');

export const generateVideo = (data) => {
  data.videos.forEach((element) => {
    const video = element.video_files[0];

    const videoDiv = document.createElement('div');
    videoDiv.classList.add('gallery-img');
    videoDiv.innerHTML = `
  <a id="heart-video" data-name="heartedVideo"><ion-icon name="heart"></ion-icon></a> 
  <video class="video" height="400" src="${video.link}" loop type="${video.file_type}"></video>
    `;
    gallery.appendChild(videoDiv);
  });

  const clip = document.querySelectorAll('.video');
  for (let item of clip) {
    item.addEventListener('mouseenter', (e) =>item.play());
    item.addEventListener('mouseout', (e) => item.pause());
  }
}

const storedVid = JSON.parse(localStorage.getItem('heartedVideo'));
if (!storedVid) {
  localStorage.setItem('heartedVideo', JSON.stringify([]));
}

document.addEventListener('click', (e) => {
  const heart = e.target.parentNode.dataset.name;
  const heartedVidSrc = e.target.parentNode.nextElementSibling.src;
  if (heart === 'heartedVideo') {
    e.target.classList.add('red');
    if (storedVid.includes(heartedVidSrc)) return;
    storedVid.push(heartedVidSrc);
    localStorage.setItem('heartedVideo', JSON.stringify(storedVid));
  }
});
