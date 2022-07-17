
import { getHeroeById,getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => { 
    test('debe de retornar un heroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id)
        console.log(hero)
        expect(hero).toEqual({id: 1,name:'Batman',owner:'DC'})
    
    
     })
     test('debe de retornar undefined si no existe el ID', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero)
        
        expect(hero).toBe(undefined)
    
    
     })

     test('debe de retornar un arreglo con los heroes de DC', () => { 
        const owner = 'DC'
        const hero = getHeroesByOwner(owner)
        console.log(hero)
        
        
        expect(hero.length).toStrictEqual(3)
        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner))
        
        
    
     })
     test('debe de retornar un arreglo con los heroes de Marvel', () => { 
        const owner = 'Marvel'
        const hero = getHeroesByOwner(owner)
        console.log(hero)
        console.log(hero)
        
        
        expect(hero.length).toStrictEqual(2)
        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner))
        
    
     })
})