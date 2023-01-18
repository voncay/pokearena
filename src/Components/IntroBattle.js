import { PokeContext } from "../Context/PokeContext";
import { useContext, useState } from "react";
import HealthBar from "../assets/health-bar.png";
import Frame from "../assets/frame.png";
import { Link } from "react-router-dom";

const IntroBattle = () => {
  const { value4, value5, value1, value } = useContext(PokeContext);
  const [team, setTeam] = value4;
  const [playerTeam, setPlayerTeam] = value5;
  const [load, setLoad] = value1;
  const [pokemon, setPokemon] = value;

  return (
    <div className="introbattle">
      <h1 className="introtitle">You team is ready to battle !</h1>

      <div className="teamframeintro">
        {playerTeam.length === 4 &&
          playerTeam.map((e, i) => (
            <div className="framePoke">
              <img
                className="pteamimg"
                src={
                  e.sprites.versions["generation-v"]["black-white"].animated
                    .front_default
                }
                alt=""
              />
              <div className="introtextframe">
                <p>
                  {" "}
                  Name : {e.name} <br />
                  Type : {e.types[0].type.name}
                  <br />
                  Level : 100
                </p>
              </div>
            </div>
          ))}
      </div>
      <h1 className="gymleadtitle">Which Gym Leader do you want to battle ?</h1>
      <div className="gymleaders">
        <div className="gymleadcolumn">
          <Link to="/battlebrock">
            <img src="/brock_rock.png" alt="" />
          </Link>
          <h1>
            Brock
            <br />
            The Rock/Ground type <br />
            Pokemon Master !
          </h1>
        </div>

        <div className="gymleadcolumn">
          <Link to="/battlemisty">
            <img src="/misty_water.png" alt="" />
          </Link>
          <h1>
            Misty
            <br />
            The Water type
            <br /> Pokemon Master !
          </h1>
        </div>

        <div className="gymleadcolumn">
          <Link to="/battlesurge">
            <img src="/ltsurge_electric.png" alt="" />
          </Link>
          <h1>
            Lt. Surge
            <br />
            The Electric type
            <br /> Pokemon Master !
          </h1>
        </div>

        <div className="gymleadcolumn">
          <Link to="/battleerika">
            <img src="/erika_grass.png" alt="" />
          </Link>
          <h1>
            Erika
            <br />
            The Grass type
            <br /> Pokemon Master !
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroBattle;
