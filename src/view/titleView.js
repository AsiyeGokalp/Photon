"use strict"
const titleGallery = document.querySelector('#title-gallery');

export  function createTitle(query,thing){
  const titleImg =document.createElement("div")
  titleImg.classList.add("titleImg")
 titleImg.innerHTML = `<h1>${query} ${thing}</h1>`
 titleGallery.appendChild(titleImg)
}