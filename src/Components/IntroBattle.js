import {PokeContext} from "../Context/PokeContext"
import {useContext} from "react"


const IntroBattle = () => {

const {value4, value5, value1} = useContext(PokeContext)
const [team, setTeam] = value4
const [playerTeam, setPlayerTeam] = value5
const [load , setLoad] = value1

console.log(playerTeam)

return(
    <div>
        <div className="teamframeintro">
        
        {playerTeam.length === 4 && ( playerTeam.map((e,i) => 
            <>
            <img className="pteamimg" src={e.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="" />
            <h1>{e.name}</h1>
            </>
        ))}  
            </div>
        
    </div>
)


}

export default IntroBattle