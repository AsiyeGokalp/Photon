# Photon

---

## How does Photon be used?

Photon is a provider of stock phography.

- In this project [Pexels API](https://www.pexels.com/api/) is used for images and videos and [Datamuse API](https://www.datamuse.com/api/) is used for words.

![Page view](./images/pt1.png)

---

- When the user searches from the search engine, suggest words dropdown in the search engine.

- The User can see her history searches in the dropdown menu.

- The User can delete the history searches if she/he wants.

- After searching, at the bottom of the search engine, words with similar meanings to the searched word appear on the recommendation part, when clicked on a word, a search is made for that word.

- After the user searches for any photo, the video button appears on the page, when s/he presses it, s/he can look at the videos related to the search and like it.

![Page view](./images/pt2.png)

---

- By clicking on the photographer's name on the photos, the User can access the photos of that photographer.

- By clicking the hearts on the photos the User can liked them and can collect them on a page. To access the photos, simply User can click on the Liked Photos button.

- By clicking the popular video button, the user can access popular videos.

- By clicking the hearts on the videos User can liked them and can collect them on a page. To access the videos, simply User can click on the Liked Videos button.

- By clicking the Leaderboard button, The user can see the names of the photographers who have shared the most photos.

- The user can zoom in by clicking on the picture.

- More images can be uploaded with the more button

- User can go to the top of the page if s/he clicks the up arrow on the right

## Demo

Here is a working live demo :[Demo](https://asiyegokalp.github.io/Photon/)

---

## ES6 + Features

- Arrow Functions
- async/await with try/catch
- Modules export/import
- localStorage

---

## Structure

```
├── images
│   ├── ph1.png
│   └── ph2.png
│
├── public
│   └── style.css
├── src
│   ├── page
│   │     ├── autocomplete.js
│   │     ├── fetchApi.js
│   │     ├── leaderBoard.js
│   │     ├── photographer.js
│   │     ├── relatedWords.js
│   │     ├── currentWeather.js
│   │     └── searched.js
│   └── view
│         ├──autocompleteView.js
│         ├──generatePicture.js
│         ├──genenerateVideo.js
│         ├──heartedPicturesView.js
│         ├──heartedVideosView.js
│         ├──leaderboardView.js
│         └──relatedWordsView.js
│
├── app.js
├── index.html
└── README.md

```

---

## Note

The browser prevents downloading anything from different servers' APIs for security reasons. Pexels API was used to create this project, in this case Photos cannot be downloaded.
