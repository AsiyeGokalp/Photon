'use strict';

import { fetchApi } from './fetchApi.js';
import { createRelatedWords } from '../view/relatedWordsView.js';

const someWords = document.getElementById('related-words');

export async function relatedWords(search) {
  someWords.innerHTML = '';

  const data = await fetchApi(`https://api.datamuse.com/words?ml=${search}`);
  createRelatedWords(data);
}
