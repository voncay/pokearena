import React from "react"
import { useContext,useState } from "react"
import {PokeContext} from "../Context/PokeContext"
import Team from './Team'



const TeamSelect = () => {

    const {value, value2, value3, value4} = useContext(PokeContext)
    const [pokemon, setPokemon] = value
    const [team, setTeam] = value4
    const [name, setName] = useState('')

    const handleClick = (e) => {

        setTeam( [...team, e ])
        console.log(e)
        }  


    


    return(
    
    <div className="teamselect">
    <h1>Select your team !</h1>

    <div className="frameteamselect">
      {pokemon.map((e,i) => { return(
        <div key={e.name} className="pokelist">
            <h1>{e.name}</h1>

            <img onClick={() => handleClick(e)} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${i +1}.gif`}    
            alt="" /> 
            </div>
      ) })}
        </div>
    {/* {team.length > 0 && <Team />} */}
    <Team />
    </div>
    )
}

export default TeamSelect