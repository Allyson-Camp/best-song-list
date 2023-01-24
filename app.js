/* Imports */
import { getSongs } from './fetch-utils.js';
import { } from './render-utils.js';
/* Get DOM Elements */
const songListContainer = document.querySelector('song-list-container');

/* State */
let songsData = [];

/* Events */

window.addEventListener('load', async () => {
    const songs = await getSongs();

    songsData = songs;
//display function?
    // for (let song of songsData) {
    //     - redner a div for each song
    //     - append the div to the html element in dom
    // - refactor render function
    // - refactor a display function
    // }
    // console.log (songsData);
});



            
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
