import { fetchApi } from './fetchApi.js';
import { createLeaderboard } from '../view/leaderboardView.js';
import { createTitle } from "../view/titleView.js";

const gallery = document.querySelector('.gallery');
const titleGallery = document.querySelector('#title-gallery');

export async function photos3() {
  gallery.innerHTML = '';
  titleGallery.innerHTML = ''
  createTitle("Leaderboard","page") 
  const data = await fetchApi(
    'https://api.pexels.com/v1/curated?per_page=225&page=1'
  );
  createLeaderboard(data);
}
