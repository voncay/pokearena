
import { useContext,useState, useEffect } from "react"
import {PokeContext} from "../Context/PokeContext"
import axios from "axios"
const Team = () => {

    const {value4, value1} = useContext(PokeContext)
    const [team, setTeam] = value4
    const [load, setLoad] = value1

    const handleDelete = (e) => {
        setTeam((oldState) => {  
            return [...oldState].filter((e) => e.name !== team.name )

         } )
    };


const addUrlIdToTeams =  () => {
    
  const teamUpdated = team
    
        team.map( (e) => {
        const split = e.url.split('/')
        const pokemonID = split[6]
        e.imageUrlId = pokemonID
        e.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonID}.gif`
        })

    console.log(team)


    return teamUpdated
}

const teamUpdated = addUrlIdToTeams()

setTeam(teamUpdated)
var results = []
const newTeam = async (results) => {

    const responses = await Promise.all(
        team.map(async (e, i) => (await axios.get(`https://pokeapi.co/api/v2/pokemon/${e.imageUrlId}`)).data )
    )
    results.push(responses)
    return responses
}

newTeam(results)
console.log(results)

// const fetchPokeDetails = async () => {

//     try { const callData = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${team[0].pokemonID}`)
//              setTeam((oldState) => {
//                 return [...oldState, callData.data]
//              })

//     } catch (err) {
//         console.log(err);
//       }

// }

// useEffect(() => {
//     fetchPokeDetails()

// }, [])










return (
    <>
    <div className="teamframe">
    { team.length > 0 ? 
    ( team.map((e,i) =>

        <div className="pokelist">
            <h1>{e.name}</h1>

            <img onClick={handleDelete} src={e.imageUrl}    
            alt="" /> 
            </div>
     
    ) ) : <p>Select a pokemom</p>
    }
    </div>
   
    </>
)

}


export default Team