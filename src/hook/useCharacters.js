
import { getChartes } from '../services/getCharacter'
import { useState ,useMemo,useCallback} from 'react'
import { useRef } from 'react'

export function useCharacters(search = "",sort) {

    const [characters, setCharacters] = useState([])
    const [loading,setLoading] = useState(false)
    const busquedaPrevia = useRef(search)

    const getCharacter = useCallback(
         async (search) => {

            if (busquedaPrevia.current === search) {
                return
            }
            busquedaPrevia.current = search
            if (search) {
                setLoading(true)
                const data = await getChartes(search)
                setLoading(false)
                setCharacters(data)
    
            } else {
                setCharacters([])
            }
        },[]) 

    // const sortCharacter = (characters) => {
    //     return sort ? [...characters].sort((a,b) => a.nombre.localeCompare(b.name) ) : characters        
    // }

    //const sortCharacters = sort ? [...characters].sort((a,b) => a.nombre.localeCompare(b.name) ) : characters        

    const sortCharacters = useMemo(()=>{
        return sort ? [...characters].sort((a,b) => a.nombre.localeCompare(b.name) ) : characters   
    },[sort,characters])

    return { characters : sortCharacters, getCharacter ,loading}
}