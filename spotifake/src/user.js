const users = [];

class User {
    constructor(name, email, birthDate) {
        if (!this.validateEmail(email)) {
            throw new Error('Email inválido');
        }
        if (users.some(user => user.name === name)) {
            throw new Error('Nome de usuário já existe');
        }

        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.playlists = [];

        users.push(this);
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

module.exports = User;
