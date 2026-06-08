import { playlistArr } from '/playlist.js'

/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

const playlistHtml = playlistArr.map(function(content, index){
    // return playlistArr
    return `
    <section class="card">
    <div class="card-start">
        <img src="/images/${content.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${content.title}</h4>
            <p class="card-artist">${content.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
    
}).join('')
document.getElementById('container').innerHTML = playlistHtml


