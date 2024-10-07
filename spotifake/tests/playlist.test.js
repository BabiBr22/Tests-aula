const Playlist = require('../src/playlist');
const Music = require('../src/music');

test('Deve adicionar uma música à playlist', () => {
    const playlist = new Playlist('Favoritas', 'Minhas músicas favoritas');
    const music = new Music('Song 1', 'Artist 1', 'Album 1', '3:30', 'Rock');
    playlist.addSong(music);
    expect(playlist.songs).toContain(music);
});

test('Deve remover uma música da playlist', () => {
    const playlist = new Playlist('Favoritas', 'Minhas músicas favoritas');
    const music = new Music('Song 1', 'Artist 1', 'Album 1', '3:30', 'Rock');
    playlist.addSong(music);
    playlist.removeSong('Song 1');
    expect(playlist.songs).not.toContain(music);
});
