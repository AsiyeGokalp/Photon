import { fetchApi } from './fetchApi.js';
import { createLeaderboard } from '../view/leaderboardView.js';
//import { photographerPhotos } from './photographer.js';

const gallery = document.querySelector('.gallery');

export async function Photos3() {
  gallery.innerHTML = '';

  const data = await fetchApi(
    'https://api.pexels.com/v1/curated?per_page=225&page=1'
  );
  createLeaderboard(data);
}
