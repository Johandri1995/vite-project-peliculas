import { useCharacters } from '../hook/useCharacters'
import { useSearch } from '../hook/useSearch'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

export function Search() {

    const { query, setQuery, error } = useSearch()
    const [sort, setSort] = useState(false)
    const { getCharacter } = useCharacters(query, sort)

    const handelSubmit = (event) => {
        event.preventDefault()
        getCharacter(query)
    }

    const debounceGetCharters = useCallback(debounce((newQuery) => {
        getCharacter(newQuery)
    }, 300)
        , [getCharacter])

    const handelChange = (event) => {
        const newQuery = event.target.value
        setQuery(newQuery)
        debounceGetCharters(newQuery)
    }

    const handelSort = () => {
        setSort(!sort)

    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <input autoComplete="off" onChange={handelChange} name="query" type="text" placeholder='Buscar...' />
                <input type="checkbox" onChange={handelSort} checked={sort} />
                <button type="submit">Buscar</button>
            </form>
            <span>{error}</span>
        </>)
}
