class Playlist {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.songs = [];
    }

    addSong(music) {
        this.songs.push(music);
    }

    removeSong(musicTitle) {
        this.songs = this.songs.filter(song => song.title !== musicTitle);
    }

    listSongs() {
        return this.songs;
    }
}

module.exports = Playlist;
