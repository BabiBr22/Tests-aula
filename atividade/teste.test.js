const { podeVotar, soma, verifica } = require('./exer1.js');

test('Pode votar e é obrigatório', () => {
    expect(podeVotar(30)).toBe('Votação obrigatória');
});

test('Pode votar e é opcional', () => {
    expect(podeVotar(80)).toBe('Votação opcional');
});

test('Não pode votar', () => {
    expect(podeVotar(10)).toBe('Não pode votar');
});

test('Soma 1 + 2', () => {
    expect(soma(1, 2)).toBe(3);
});

test('verificandp positivo', () => {
    expect(verifica(10)).toBe('positivo');
});

test('verificandp negaivo', () => {
    expect(verifica(-10)).toBe('negaivo');
});

test('verificandp zero', () => {
    expect(verifica(0)).toBe('zero');
});