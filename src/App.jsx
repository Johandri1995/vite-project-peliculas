

import { useCallback, useState } from 'react'
import './App.css'

import { Characteres } from './components/Characteres.jsx'
// import { Search } from './components/Search.jsx'
import { useCharacters } from './hook/useCharacters.js'
import { useSearch } from './hook/useSearch.js'
import debounce from 'just-debounce-it'

function App() {


  //const a = getCharacter()

  //setp(getCharacter()) 

  //const inputRef = useRef()

  // const handelSubmit = (event) => {
  //   event.preventDefault()
  //   // const value = inputRef.current.value
  //   // console.log(value)
  //   const data =  Object.fromEntries(new FormData(event.target))
  //   const {query} = data
  //   setQuery(query)
  //   console.log(query)
  // }
  const [sort,setSort] = useState(false)

  const { query, setQuery, error } = useSearch()
  const { characters, getCharacter, loading } = useCharacters(query,sort)


  const handelSubmit = (event) => {
    event.preventDefault()
    getCharacter(query)
  }

  const debounceGetCharters = useCallback(debounce((newQuery) => {
    getCharacter(newQuery)
  },300) 
  ,[getCharacter])

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
      <header>
        <h2>Buscador de personajes</h2>
         <form onSubmit={handelSubmit}>
          <input autoComplete="off" onChange={handelChange} name="query" type="text" placeholder='Buscar...' />
          <input type="checkbox" onChange={handelSort} checked={sort}/>
          <button type="submit">Buscar</button>
        </form> 
        <span>{error}</span>
      </header>
      <main>
        {loading ? <p>Cargando....</p> : <Characteres characters={characters}></Characteres> }
      </main>
    </>
  )
}

export default App
