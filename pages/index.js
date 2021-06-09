import { useState, useEffect } from "react"
import Head from 'next/head'

import PokemonCard from "../src/components/pokemon/card"

export default function Home({  }) {

 const [pokemonlist, setpokemonlist] = useState([])
 const [offset, setOffset] = useState(0)
 const [limit, setLimit] = useState(20)
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}')
      .then( res => res.json())
      .then(data => {
        setpokemonlist(data.results)
      })
    
    }, [])
   
  

  return (
    <>
      <Head>
        <title>Pokedex SG</title>
      </Head>
      <h1>Olá Página</h1>
     
      <u1>
        {pokemonlist.map((pokemon, id) => (
          <li><PokemonCard id={id+offset+1} name={pokemon.name} key={id} /></li>
        ))}
      </u1>
     </>   
    )
  }
