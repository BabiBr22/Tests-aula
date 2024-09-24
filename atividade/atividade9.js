//9. Crie uma função que recebe um array de objetos, onde cada objeto representa um
// livro com propriedades titulo e autor. A função deve retornar um array contendo
// apenas os títulos dos livros cujos autores têm mais de 5 caracteres em seu nome.

let filtrarLivrosPorAutor = livros => livros.filter(({ autor }) => autor.length > 5).map(({ titulo }) => titulo);

let livros = [
    { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
    { titulo: 'Harry Potter', autor: 'J.K. Rowling' },
    { titulo: '1984', autor: 'George Orwell' }
];
console.log(filtrarLivrosPorAutor(livros));
