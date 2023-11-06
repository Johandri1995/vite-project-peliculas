import { useEffect, useState,useRef } from 'react'

export function useSearch() {

    const [query,setQuery] = useState("");
    const [error,setError] = useState("");
    const isFristInput = useRef(true)

    useEffect(()=>{

        if(isFristInput.current){
            isFristInput.current = query === ""
            return
        }

        if(query == "") 
        {
            setError("No se puede buscar una pelicula vacia")
            return
        }  

        if(query.length<3) 
        {
            setError("La busqueda debe ser mayor a 3")
            return
        }        
    
        setError(null)

    },[query])

    return {query,setQuery,error}
}