/* Imports */
import { getSongs } from './fetch-utils.js';
import { renderSongCard } from './render-utils.js';
/* Get DOM Elements */
const songListContainer = document.querySelector('.song-list-container');

/* State */
let songsData = [];

/* Events */

window.addEventListener('load', async () => {
    const songs = await getSongs();
    songsData = songs;
    // console.log(songsData);
    displaySongs();
    
});      
/* Display Functions */

function displaySongs() {
    for (let song of songsData) {
        //redner a div for each song
        // console.log(songsData, song);
        const songEl = renderSongCard(song);
        //append the div to the html element in dom
        songListContainer.append(songEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
