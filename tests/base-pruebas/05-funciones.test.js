import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones.test', () => { 

    test('getUser debe de retornar un objeto', () => { 
        const h = 2;
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(testUser).toStrictEqual(user)

     })
     test('getUsuarioActivo debe de retornar un objeto', () => { 
        const name = 'Fernando'

        const user = getUsuarioActivo(name)

        const testUser ={
            uid: 'ABC567',
            username: name
        }

        expect(testUser).toStrictEqual(user)
        
    })
})


