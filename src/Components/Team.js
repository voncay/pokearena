
import { useContext,useState, useEffect } from "react"
import {PokeContext} from "../Context/PokeContext"
import axios from "axios"
const Team = () => {

    const {value4} = useContext(PokeContext)
    const [team, setTeam] = value4


    const handleDelete = (e) => {
        setTeam((oldState) => {  
            return [...oldState].filter((e) => e.name !== team.name )

         } )
};


const addUrlIdToTeams = () => {
    const teamUpdated = team

    team.map( e => {
        const split = e.url.split('/')
        const pokemonID = split[6]
        e.imageUrlId = pokemonID
        e.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonID}.gif`
        
    })

    return teamUpdated
}

const teamUpdated = addUrlIdToTeams()

setTeam(teamUpdated)


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

// const [battleTeam, setBattleTeam] = useState({0: {}, 1:{}, 2: {}, 3:{}})

// team.map((e, i) => fetchInfos(i))


// const fetchInfos =  async (i) => {
//    try {
//        const callData = await axios.get(`url/${team[i].pokemonID}`)
//        setBattleTeam( [...battleTeam, {i :  callData.data}])
//    } catch (err) {
//        console.log(err)
//    }
// }

// useEffect(() => {
//     fetchInfos()

// }, [])






return (
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
)

}


export default Team