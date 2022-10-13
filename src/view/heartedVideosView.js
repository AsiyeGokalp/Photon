'use strict';

import { heartedDiv } from "./heartedView.js";

const gallery = document.querySelector('.gallery');

export async function createdHeartedVid() {
  gallery.innerHTML = '';
  const heartedVideos = JSON.parse(localStorage.getItem('heartedVideo'));
  heartedDiv(heartedVideos)

}
