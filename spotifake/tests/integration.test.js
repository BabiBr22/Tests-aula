const User = require('../src/user');
const Music = require('../src/music');
const Playlist = require('../src/playlist');

test('Deve realizar o fluxo completo de um usuário com playlists e músicas', () => {
    const user = new User('João', 'joao@email.com', '1990-01-01');
    const playlist = new Playlist('Favoritas', 'Minhas músicas favoritas');
    const music = new Music('Song 1', 'Artist 1', 'Album 1', '3:30', 'Rock');

    user.playlists.push(playlist);
    playlist.addSong(music);

    expect(playlist.listSongs()).toContain(music);

    playlist.removeSong('Song 1');
    expect(playlist.listSongs()).not.toContain(music);
});
