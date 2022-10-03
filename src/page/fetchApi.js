'use strict';

const auth = '563492ad6f917000010000016af7322173b14678acbff5691ee5fbf2';

export async function fetchApi(url) {
  try {
    const dataFetch = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    });
    const data = await dataFetch.json();
    return data;
  } catch (error) {
    throw new Error('error.message');
  }
}
