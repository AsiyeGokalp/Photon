'use strict';



import { fetchApi } from "./src/page/fetchApi.js";
import { generatePictures } from "./src/view/generatePicture.js";
import { relatedWords } from "./src/page/relatedWords.js";
import { autoComplete } from "./src/page/autocomplete.js";
import { searchedOldWords } from "./src/page/searched.js";
import { photographerPhotos } from "./src/page/photographer.js";
import { createdHeartedImg } from "./src/page/heartedPhotos.js";


const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;
const more = document.querySelector(".more");
const searchDownMenu=document.querySelector(".search-down")
const likedPhotos = document.querySelector("#liked-photo")
const clearSearchedPhotos = document.querySelector(".clear")

let page = 1;
let fetchLink;
let currentSearch;
const storedWords =JSON.parse(localStorage.getItem('searchedWords'))

if(!storedWords){
  localStorage.setItem('searchedWords',JSON.stringify([])) 
}

//Event Listeners
searchInput.addEventListener("input", (e)=>{
  e.preventDefault()
  searchValue = e.target.value;
});
searchInput.addEventListener("focus",searchedOldWords)

document.addEventListener("click",()=>{
  searchDownMenu.classList.add("hide")
})

form.addEventListener("input",(e)=>{
  e.preventDefault();
  autoComplete(searchValue)
  searchDownMenu.classList.remove("hide")
})

document.addEventListener("click",()=>{
  searchDownMenu.classList.add("hide")
})


form.addEventListener("submit", e => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
  searchDownMenu.classList.add("hide")
  if(!Object.values(storedWords).includes(currentSearch))
  storedWords.push(currentSearch)
  localStorage.setItem("searchedWords",JSON.stringify(storedWords))
});


form.addEventListener("submit",(e)=>{
  e.preventDefault()
  relatedWords(searchValue)
})
 clearSearchedPhotos.addEventListener("click",(e)=>{
  localStorage.clear("searchedWords")
 })


document.addEventListener('click', (e) => {
  const name=e.target.dataset.name;
  if(name){
    photographerPhotos(name)
  }
 })

 likedPhotos.addEventListener("click", createdHeartedImg)

more.addEventListener("click", loadMore);
document.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'img') {
    const item = e.target.nextElementSibling
     item.style.display="flex"
     item.classList.add("modal-show")  
     item.classList.remove("modal-hide")  
  }
 })


 document.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'span') {
    const item = e.target.parentNode.parentNode
     item.style.display="none"
     item.classList.add("modal-hide")
     item.classList.remove("modal-show") 
  }
 })



async function curatedPhotos() {
  fetchLink = "https://api.pexels.com/v1/curated?per_page=15&page=1";
  const data = await fetchApi(fetchLink);
  generatePictures(data); 
}


export async function searchPhotos(query) {
  gallery.innerHTML="";
  clear()
  fetchLink = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`;
  const data = await fetchApi(fetchLink);
  console.log(data)
  generatePictures(data); 
  
   document.addEventListener('click', async (e) => {
    const name=e.target.dataset.name;
    if(name){
      gallery.innerHTML="";
  const data = await fetchApi(`https://api.pexels.com/v1/search?query=${query}+query&per_page=225&page=1`)
  const photos= data.photos.filter(photo =>photo.photographer===name)
  const dataObject={photos}
  generatePictures(dataObject)
    }
   })
}


const clear = () => {
  gallery.innerHTML = "";
  searchInput.value = "";
}


async function loadMore() {
  page++;
  if (currentSearch) {
    fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}+query&per_page=15&page=${page}`;
  } else {
    fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
  }
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}


window.addEventListener('load',curatedPhotos);
