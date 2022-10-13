'use strict';
import { heartedDiv } from "./heartedView.js";
const gallery = document.querySelector('.gallery');

export async function createdHeartedImg() {
  gallery.innerHTML = '';
  const heartedPhotos = JSON.parse(localStorage.getItem('hearted'));
  heartedDiv(heartedPhotos)
}
