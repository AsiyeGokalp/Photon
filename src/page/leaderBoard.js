import { fetchApi } from "./fetchApi.js"; 
import {photographerPhotos} from "./photographer.js"

const gallery = document.querySelector('.gallery');

export async function Photos3(fetchLink) {
  gallery.innerHTML = '';
  fetchLink = 'https://api.pexels.com/v1/curated?per_page=225&page=1';
  const data = await fetchApi(fetchLink);

  const names=[]
  data.photos.forEach(element => {
    names.push(element.photographer)
  })
  let counts = {}

  for(let i =0; i < names.length; i++){ 
      if (counts[names[i]]){
      counts[names[i]] += 1
      } else {
      counts[names[i]] = 1
      }
     }  
    
     const name=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,6)
    
  

     const baslik=document.createElement("div")
     baslik.innerHTML="<h1> The photographer who uploads the most photos</h1>"
     
     gallery.appendChild(baslik)
    
     name.forEach(item=>{
     
      const containerBig =document.createElement("div")
      containerBig.classList.add("big")
     


      const nameUl=document.createElement("ul")
      nameUl.classList.add("name-ul")
      nameUl.dataset.name=item[0]
      nameUl.innerHTML=`
      <li data-name="${item[0]}">${item[0]} has uploaded ${item[1]}  photos</li>
      `
      
      
      containerBig.appendChild(nameUl)
      gallery.appendChild(containerBig)
      

   
     })
    
     
     
  
     
}



