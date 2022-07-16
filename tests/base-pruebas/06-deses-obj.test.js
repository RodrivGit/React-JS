import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas de 06-deses-obj', () => {

    test('usContext debe devolver un objeto', () => {
        const nombre = 'Tony'
        const edad = 45
        const clave = 'Ironman'

        const testContext ={
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1223,
                lng: -12.3232
            }
        }
        const getContext = usContext({clave,nombre,edad})
        
        expect(getContext).toEqual(testContext)


     })
 })