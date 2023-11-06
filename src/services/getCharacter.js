
import axios from 'axios'
//import DAtosNotResponseCharacters from '../mocks/no-results.json'

export async function  getChartes(search){
    try {

        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
        
        const mappCharacter = data.results?.map((character) => ({
            id: character.id,
            nombre: character.name,
            estado: character.status,
            imagen: character.image
        }))

        return mappCharacter
    }
    catch(e){
        return []
    }

    
}