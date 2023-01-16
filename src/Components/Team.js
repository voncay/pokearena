
import { useContext,useState } from "react"
import {PokeContext} from "../Context/PokeContext"

const Team = () => {

    const {value4} = useContext(PokeContext)
    const [team, setTeam] = value4


    const handleDelete = (e) => {
        setTeam((oldState) => {  
            return [...oldState].filter((e) => e.name !== team.name )


         } )
};


// console.log(team)
return (
    <div className="teamframe">
    { team.length > 0 ? 
    ( team.map((e,i) =>

        <div className="pokelist">
            <h1>{e.name}</h1>

            <img onClick={handleDelete} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${i +1}.gif`}    
            alt="" /> 
            </div>
     
    ) ) : <p>Select a pokemom</p>
    }
    </div>
)
}

export default Team