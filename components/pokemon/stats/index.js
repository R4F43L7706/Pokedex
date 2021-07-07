import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import React from 'react'
 
 function PokemonStats (props) {

    if(!props.stats) {
        return <p>Carregando...</p>
    }

     return (

         <div> 
             <table>
                 <thead>
                    <tr>
                        <th colSpan={2}>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    {props.stats.map((stat, index)=>{
                        return (
                            <tr key={index}>
                                <th>{stat.stat.name}</th>
                                <td>{stat.base_stat}</td>
                            </tr>
                        )
                    })}
               </tbody>
             </table>
         </div>
     )
}

 export default PokemonStats