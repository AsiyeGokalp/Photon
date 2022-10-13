'use strict';

import { fetchApi } from './src/page/fetchApi.js';
import { generatePictures } from './src/view/generatePicture.js';
import { relatedWords } from './src/page/relatedWords.js';
import { autoComplete } from './src/page/autocomplete.js';
import { searchedOldWords } from './src/page/searched.js';
import { photographerPhotos } from './src/page/photographer.js';
import { createdHeartedImg } from './src/view/heartedPhotosView.js';
import { createdHeartedVid } from './src/view/heartedVideosView.js';
import { photos3 } from './src/page/leaderBoard.js';
import { generateVideo } from './src/view/generateVideo.js';
import { createTitle } from './src/view/titleView.js';


const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const form = document.querySelector('.search-form');
const more = document.querySelector('.more');
const searchDownMenu = document.querySelector('.search-down');
const likedPhotos = document.querySelector('.liked-photos');
const clearSearchedPhotos = document.querySelector('.clear');
const popularVids = document.querySelector('.popular-videos');
const likedVideos = document.querySelector('.liked-videos');
const leaderboard = document.querySelector('.leaderboard');
const videoBtn = document.querySelector("#video-btn")
const imgBtn = document.querySelector(".img-btn")
const titleGallery = document.querySelector('#title-gallery');
let searchValue;
let page = 1;
let fetchLink;
let currentSearch;
let pathName
const storedWords = JSON.parse(localStorage.getItem('searchedWords'));

if (!storedWords) {
  localStorage.setItem('searchedWords', JSON.stringify([]));
}

//Event Listeners
videoBtn.addEventListener("click",() =>{
  searchVideo(currentSearch)
})

searchInput.addEventListener('input', (e) => {
  searchValue = e.target.value;
});

searchInput.addEventListener('focus', () => {
  searchInput.value = '';
  searchedOldWords()
});

document.addEventListener('click', () => {
  searchDownMenu.classList.add('hide');
});

form.addEventListener('input', (e) => {
  autoComplete(searchValue);
  searchDownMenu.classList.remove('hide');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
  searchDownMenu.classList.add('hide');
  if (!Object.values(storedWords).includes(currentSearch))
    storedWords.push(currentSearch);
  localStorage.setItem('searchedWords', JSON.stringify(storedWords));
  videoBtn.classList.remove("hide")
  imgBtn.classList.remove("hide")
  searchInput.blur()
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  relatedWords(searchValue);
});

clearSearchedPhotos.addEventListener('click', (e) => {
  localStorage.clear('searchedWords');
});

document.addEventListener('click', (e) => {
  const name = e.target.dataset.name;
  if (name) {
    photographerPhotos(name);
  }
});

leaderboard.addEventListener('click', () => {
  photos3();
  videoBtn.classList.add("hide")
  imgBtn.classList.add("hide")
  more.classList.add('hide');
});

likedPhotos.addEventListener('click', ()=>{
  createdHeartedImg() 
  videoBtn.classList.add("hide")
  imgBtn.classList.add("hide")
  more.classList.add('hide');
});

popularVids.addEventListener('click',()=> {
  videoBtn.classList.add("hide")
  imgBtn.classList.add("hide")
  popularVideos()
});


likedVideos.addEventListener('click', () => {
  createdHeartedVid();
  videoBtn.classList.add("hide")
  imgBtn.classList.add("hide")
  more.classList.add('hide');
});

more.addEventListener('click', loadMore);
document.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'img') {
    const item = e.target.nextElementSibling;
    item.style.display = 'flex';
    item.classList.add('modal-show');
    item.classList.remove('modal-hide');
  }
});

document.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'span') {
    const item = e.target.parentNode.parentNode;
    item.style.display = 'none';
    item.classList.add('modal-hide');
    item.classList.remove('modal-show');
  }
});



imgBtn.addEventListener("click",()=> {
  searchPhotos(currentSearch)
})

async function curatedPhotos() {
  createTitle("free stock ","photos")
  fetchLink = 'https://api.pexels.com/v1/curated?per_page=15&page=1';
  const data = await fetchApi(fetchLink);
  pathName = fetchLink.split("/")[3]
  //gallery.appendChild(generatePictures(data))
  generatePictures(data);
  more.classList.remove('hide');
  
}

export async function popularVideos() {
  gallery.innerHTML = '';
  titleGallery.innerHTML=""
  createTitle("popular", "videos")
  fetchLink='https://api.pexels.com/videos/popular?per_page=15&page=1'
  pathName = fetchLink.split("/")[3]
  const data = await fetchApi(fetchLink);
  generateVideo(data);
}

export async function searchVideo(query){
  clear()
  createTitle(query,"videos")
  fetchLink=`https://api.pexels.com/videos/search?query=${query}&per_page=15`
  const data = await fetchApi(fetchLink);
  pathName = fetchLink.split("/")[3]
  generateVideo(data);
}
export async function searchPhotos(query) {
  clear();
  createTitle(query,"pictures")
  fetchLink = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`;
  const data = await fetchApi(fetchLink);
  pathName = fetchLink.split("/")[3]
  generatePictures(data);
  more.classList.remove('hide');
  document.addEventListener('click', async (e) => {
    const name = e.target.dataset.name;
    if (name) {
      gallery.innerHTML = '';
      const data = await fetchApi(
        `https://api.pexels.com/v1/search?query=${query}+query&per_page=225&page=1`
      );
      const photos = data.photos.filter((photo) => photo.photographer === name);
      const dataObject = { photos };
      generatePictures(dataObject);
    }
  });
}
const clear = () => {
  gallery.innerHTML = '';
  titleGallery.innerHTML=""
  
};
async function loadMore() {
  page++;
  if (currentSearch) {
          if(pathName === "v1"){
            fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}+query&per_page=15&page=${page}`
            const data = await fetchApi(fetchLink);
            generatePictures(data)
            
  }
            if(pathName === "videos" ){
              fetchLink=`https://api.pexels.com/videos/search?query=${currentSearch}&per_page=15&page=${page}`
              const data = await fetchApi(fetchLink);
             generateVideo(data);
            }
  } else {
    if(pathName === "v1"){
      fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`
    const data = await fetchApi(fetchLink);
    generatePictures(data);
  }
  if(pathName === "videos"){
    fetchLink=`https://api.pexels.com/videos/popular?per_page=15&page=${page}`
  const data = await fetchApi(fetchLink);
  generateVideo(data)
}
  }
}

window.addEventListener('load', curatedPhotos);
