import Link from 'next/link'

function PokemonCard(props) {

  //console.log(props)

  return (
    <Link href="/pokemon/[id]" as={`/pokemon/${props.id}`}>
      <a><h3>NO. {props.id} - {props.name}</h3></a>
    </Link>
  )
}

export default PokemonCard