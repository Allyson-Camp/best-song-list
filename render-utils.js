export function renderSongCard(song) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('song-card');

    p.textContent = song.title;
    img.src = `./assets/${song.id}.png`;
    a.href = `./detail/?id=${song.id}`;
    //append things to the div
    div.append(p, img);
    //append div to dom
    a.append(div);
    //return the a
    return a;
}

export function renderSongDetail(songDetail) {
//create elements
    const div = document.createElement('div');
    const img = document.createElement('img');
    const titleEl = document.createElement('p');
    const artistEl = document.createElement('p');
    const albumEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const producerEl = document.createElement('p');

    img.src = `./assets/${songDetail.song.id}.png`;
//add classlists for styling

//set the textcontent for songDetail
    titleEl.textContent = songDetail.title;
    artistEl.textContent = songDetail.artist;
    albumEl.textContent = songDetail.album;
    yearEl.textContent = songDetail.songs.year; //ask!!!!!! (column in table is called year)
//append what is needed
    div.append(img, titleEl, artistEl, albumEl, yearEl, producerEl);
//return
    return div;


}