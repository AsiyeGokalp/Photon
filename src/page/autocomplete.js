'use strict';

import { fetchApi } from './fetchApi.js';
import { createAutocomplete } from '../view/autocompleteView.js';

const currentSearch = document.querySelector('#current-search');

export async function autoComplete(search) {
  currentSearch.innerHTML = '';

  const data = await fetchApi(`https://api.datamuse.com/sug?s=${search}`);
  createAutocomplete(data);
}
