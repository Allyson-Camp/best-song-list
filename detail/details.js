//imports
import { getIndividualSong } from '../fetch-utils.js';
import { renderSongDetail } from '../render-utils.js';

//dom elements
const songDetailContainer = document.querySelector('.song-detail-container');

//state
let songData = {};

//events
window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');

    const song = await getIndividualSong(id);
    songData = song;
    
    displaySong(songData);

});

function displaySong(songData) {
    const songDetailEl = renderSongDetail(songData);
    songDetailContainer.append(songDetailEl);
}