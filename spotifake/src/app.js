const Music = require('./music');
const User = require('./user');
const Playlist = require('./playlist');

const user = new User('João', 'joao@email.com', '1990-01-01');
const playlist = new Playlist('Favoritas', 'Minhas músicas favoritas');

const music1 = new Music('Song 1', 'Artist 1', 'Album 1', '3:30', 'Rock');
const music2 = new Music('Song 2', 'Artist 2', 'Album 2', '4:20', 'Pop');

user.playlists.push(playlist);
playlist.addSong(music1);
playlist.addSong(music2);

console.log(playlist.listSongs());
