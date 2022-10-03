"use strict"

import { fetchApi } from "./fetchApi.js";
import { generateVideo } from "../view/generateVideo.js";


export async function popularVideos() {
  gallery.innerHTML = '';
  fetchLink = 'https://api.pexels.com/videos/popular?per_page=225&page=1';
  const data = await fetchApi(fetchLink);

  generateVideo(data);
  more.classList.add('hide');
}