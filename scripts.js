const playlistId = '1XRwjNcotnKaRShnL0E9Is';
const token =

fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(response => {
  console.log("Status:", response.status);
  return response.json();
})
.then(data => {
  console.log("Returned data:", data);
    displayArtwork(data);
})
.catch(error => {
  console.error("Error fetching data:", error);
});

function displayArtwork(data) {
    const firstTrack = data.tracks.items[0]?.track;
    if (firstTrack) {
        let artistName = firstTrack.artists[0]?.name;
        console.log(artistName);
    }

    let album_art = `<img src="${data.images[0].url}">`;
    let songs = [];
    let songList = "<ul>";
    let link = data.external_urls.spotify;

    for(let i = 0; i < data.tracks.items.length; i++) {
        songs.push(data.tracks.items[i].track.name);
    }

    songs.forEach(element => {
        songList += `<li>${element}</li>`;
    });

    songList += "</ul>";
    console.log(songs);
    console.log(album_art);
    document.getElementById("album-pic").innerHTML = album_art;
    document.getElementById("album-pic").innerHTML += songList;
    document.getElementById("album-pic").innerHTML += `<a href="${link}">Click here to listen to the playlist!!</a>`;
}
