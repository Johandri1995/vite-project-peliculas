
export function ListCharacteres({characteres}) {

    return (  
    <ul className="characters">
        {
        characteres.map((character)=>(
          <li className="characters" key={character.id}>
            <h3>{character.nombre}</h3>
            <p>{character.estado}</p>
            <img src={character.imagen} alt={character.name} />            
          </li>
        )
        )}      
        
      </ul>)

}

export function NotListCharacteres() {
    return ( <h2>No hay resultados</h2> )

}

export function Characteres({characters}){

  const hasCharacters =  characters?.length>0

  return ( 
    hasCharacters 
    ? 
      <ListCharacteres characteres={characters}/>   
    : 
     <NotListCharacteres/>
    )


}