const User = require('../src/user');

test('Deve criar um usuário com email válido', () => {
    const user = new User('João', 'joao@email.com', '1990-01-01');
    expect(user.email).toBe('joao@email.com');
});

test('Deve lançar erro se o email for inválido', () => {
    expect(() => new User('Maria', 'emailinvalido', '1990-01-01')).toThrow('Email inválido');
});
