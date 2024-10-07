const Music = require('../src/music');

test('Deve criar uma música com todos os campos obrigatórios', () => {
    const music = new Music('Song 1', 'Artist 1', 'Album 1', '3:30', 'Rock');
    expect(music.title).toBe('Song 1');
    expect(music.artist).toBe('Artist 1');
});

test('Deve lançar um erro se faltar algum campo', () => {
    expect(() => new Music()).toThrow('Todos os campos são obrigatórios');
});
