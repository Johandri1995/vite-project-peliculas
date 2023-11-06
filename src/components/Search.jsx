import { useCharacters } from '../hook/useCharacters'
import {useSearch} from '../hook/useSearch'

export function Search(){

    const {query,setQuery,error} = useSearch()
    const {getCharacter} = useCharacters(query)

    const handelSubmit = (event) =>{        
        event.preventDefault()
        getCharacter()        
    }

    const handelChange = (event) =>{        
        setQuery(event.target.value)     
    }
    
    return (
    <>
    <form onSubmit={handelSubmit}>        
        <input autoComplete="off" onChange={handelChange} name="query" type="text" placeholder='Buscar...'/>
        <button type="submit">Buscar</button>        
    </form>
    <span>{error}</span>
    </>)
}
