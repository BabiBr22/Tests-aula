//Importar nossos modulos
const { addUser, getUser, deleteUser } = require('../src/users')
const { addOrder, getOrder, deleteOrder } = require('../src/orders')

//Estrutura 
//testando funcao adicionar

describe('Testando a funcao adicionar pedidos e ususarios', () => {
    test('adicionar pedidos e usuarios', () => {
        const user = {
            id: 1,
            name: "joão"


        }
        const order = {
            id: 100,
            item: "mouse",
            userId: 1
        }

        addUser(user)
        addOrder(order)

        const findUser = getUser(1)
        const findOrder = getOrder(100)

        expect(findUser).toEqual(user)
        expect(findOrder).toEqual(order)
        //verificar a integração dos dois
        expect(findOrder.userId).toBe(findUser.id)
    })
})