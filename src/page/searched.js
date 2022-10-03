'use strict';

const localStoredWords = document.querySelector("#recent-searches")

export async function searchedOldWords(){
   const storedWords= JSON.parse(localStorage.getItem('searchedWords'))
   const words =storedWords.slice(-Math.min(storedWords.length,10)).reverse()
   
   words.forEach(element => {
   const list = document.createElement('ul')
   list.classList.add('list')
   list.innerHTML=`
   <li class="word"  >${element}</li>`
   localStoredWords.appendChild(list)
  });
  document.querySelectorAll(".list").forEach(item =>{
    item.addEventListener("click",(e)=>{
      const search=e.target.dataset.word
      currentSearch.innerHTML=search
      return searchPhotos(search)
      
    })
  })
}


