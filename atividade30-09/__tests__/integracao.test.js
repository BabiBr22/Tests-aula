// Importar nossos módulos
const { addUser, getUser, deleteUser } = require('../src/users');
const { addOrder, getOrder, deleteOrder } = require('../src/orders');

// Estrutura
// Testando função adicionar
describe('Testando a função adicionar pedidos e usuários', () => {
    
    test('Adicionar pedidos e usuários', () => {
        const user = {
            id: 1,
            name: "João"
        };
        const order = {
            id: 100,
            item: "mouse",
            userId: 1
        };

        addUser(user);
        addOrder(order);

        const findUser = getUser(1);
        const findOrder = getOrder(100);

        expect(findUser).toEqual(user);
        expect(findOrder).toEqual(order);
        // Verificar a integração dos dois
        expect(findOrder.userId).toBe(findUser.id);
    });

    test('Testando a função excluir', () => {
        // Adicionar usuário e pedido
        const user = {
            id: 2,
            name: 'Maria'
        };
        const order = {
            id: 200,
            item: 'Cadeira',
            userId: 2
        };

        addUser(user);
        addOrder(order);

        // Deletar primeiro o pedido, pois está vinculado ao usuário
        deleteOrder(200);
        deleteUser(2);

        // Buscando usuário e pedido na lista
        const findUser = getUser(2);
        const findOrder = getOrder(200);

        // Verificando se o resultado da busca dá undefined
        expect(findUser).toBeUndefined();
        expect(findOrder).toBeUndefined();
    });
});
