import { PokeContext } from "../Context/PokeContext";
import { useContext, useState } from "react";
import HealthBar from "../assets/health-bar.png";
import Frame from "../assets/frame.png";

const IntroBattle = () => {
  const { value4, value5, value1 ,value} = useContext(PokeContext);
  const [team, setTeam] = value4;
  const [playerTeam, setPlayerTeam] = value5;
  const [load, setLoad] = value1;
  const [pokemon, setPokemon] = value;


console.log('poke',pokemon[111])





  return (
    <div>
      <div className="teamframeintro">
        {playerTeam.length === 4 &&
          playerTeam.map((e, i) => (
            <>
              <div className="framePoke">
                <img
                  className="pteamimg"
                  src={
                    e.sprites.versions["generation-v"]["black-white"].animated
                      .front_default
                  }
                  alt=""
                />
                <div className="textFrame">
                  {e.name} {e.types[0].type.name}
                </div>
                <img src={HealthBar} style={{ width: "100px" }} alt="" />
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default IntroBattle;
