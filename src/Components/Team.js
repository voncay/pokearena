import { useContext, useState, useEffect } from "react";
import { PokeContext } from "../Context/PokeContext";
import axios from "axios";
const Team = () => {
  const { value4, value1, value5 } = useContext(PokeContext);
  const [team, setTeam] = value4;
  const [load, setLoad] = value1;
  const [playerTeam, setPlayerTeam] = value5;

  console.log(team);
  const handleDelete = (e) => {
    let test2 = [...team];
    test2.splice(e, 1);
    setTeam(test2);
    // setTeam((oldState) => {
    //   console.log(e)
    //     return [...oldState].filter((i) => e !== team.e)
    //  } )
  };

  const addUrlIdToTeams = () => {
    const teamUpdated = team;

    team.map((e) => {
      const split = e.url.split("/");
      const pokemonID = split[6];
      e.imageUrlId = pokemonID;
      e.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonID}.gif`;
    });

    return teamUpdated;
  };

  const teamUpdated = addUrlIdToTeams();

  setTeam(teamUpdated);

  const newTeam = async () => {
    const responses = await Promise.all(
      team.map(
        async (e, i) =>
          (
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${e.imageUrlId}`)
          ).data
      )
    );
    setPlayerTeam(responses);
    setLoad(true);
  };
  // console.log(playerTeam)

  useEffect(() => {
    newTeam();
  }, [team]);

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
        {team.length > 0 ? (
          team.map((e, i) => (
            <div className="pokelist">
              <h1>{e.name}</h1>

              <img onClick={() => handleDelete(i)} src={e.imageUrl} alt="" />
            </div>
          ))
        ) : (
          <p>Select a pokemom</p>
        )}
      </div>
    </>
  );
};

export default Team;
