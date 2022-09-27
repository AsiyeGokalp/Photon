'use strict';

import { searchPhotos } from "../../app.js";


const someWords= document.getElementById("related-words")
const currentSearch = document.querySelector("#current-search")


export async function relatedWords(search){
  try{
  someWords.innerHTML=""
  const response = await fetch(`https://api.datamuse.com/words?ml=${search}`)
  const data = await response.json();
  
  const words = data.slice(0,Math.min(data.length,10))
  
  words.map(element => {
   const list = document.createElement('ul')
   list.classList.add('list')
   list.innerHTML=`
   <li class="word" data-word='${element.word}' >${element.word}</li>
   `
   someWords.appendChild(list);
  })
} catch(error) {
  throw new Error ("error.message")
}
  document.querySelectorAll(".list").forEach(item =>{
    item.addEventListener("click",(e)=>{
      const search=e.target.dataset.word
      currentSearch.innerHTML=search
      return searchPhotos(search)
      
    })
  })
}





