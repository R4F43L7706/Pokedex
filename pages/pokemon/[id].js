import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import PokemonTitle from '../../components/pokemon/title'
import PokemonStats from '../../components/pokemon/stats'
function Pokemon() { 
    
    const Router = useRouter()
    const [pokemon, setPokemon] = useState({})
    
    // console.log(Router)
    
    useEffect(() => {
        async function getdataPokemon() {
            const body = await fetch(`https://pokeapi.co/api/v2/pokemon/${Router.query.id}` , { method: 'get'})
            const data = await body.json()
            const { abilities, height, name, sprites, stats, types, weight } = await data
            setPokemon({ abilities, height, name, sprites, stats, types, weight }) 
        }
        getdataPokemon()
    }, [])

    if (!pokemon) {
        return <span>Carregando...</span>
    } 

    return (
        <div>
            <h1>Pokemon {Router.query.id}</h1>
            <img 
                src={pokemon.sprites.other["official-artwork"].front_default} 
                alt={"imagem do pokemon ${pokemon.name}"}
                width={300}
            />
            <PokemonTitle id={Router.query.id} name={pokemon.name} />
            <PokemonStats stats={pokemon.stats} />
        </div>
    )
}

export default Pokemon