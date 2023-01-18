import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokeContext = createContext();

export const PokeController = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [load, setLoad] = useState(false);
  const [pokemon2, setPokemon2] = useState([]);
  const [input, setInput] = useState("");
  const [team, setTeam] = useState([]);
  const [playerTeam, setPlayerTeam] = useState([]);

  const fetchData = async () => {
    try {
      const callData = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
      );
      setPokemon(callData.data.results);
      setLoad(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // let createP1Team = []

  // team.length > 0 && team.map( e =>
  //   createP1Team.push(populateArray(e))
  // )

  // const populateArray = async (e) => {
  //   try{
  //       const callData = await axios.get(
  //           `https://pokeapi.co/api/v2/pokemon/${e.pokemonID}`)

  //         const pokemonDetails = callData.data;
  //           setLoad(true);
  //         return pokemonDetails
  //   }
  //   catch (err) {
  //       console.log(err);
  //   }

  // }

  // useEffect(() => {
  //     populateArray()

  //   }, []  )

  // setP1Team(createP1Team)

  // const fetchData2 = async () => {

  //     try{
  //         const callData = await axios.get(
  //             `https://pokeapi.co/api/v2/pokemon/${team.pokemonID}`)
  //             setPokemon2(input)
  //             setPokemon2(callData.data);
  //             setLoad(true);

  //     }
  //     catch (err) {
  //         console.log(err);
  //       }
  // }

  // useEffect(() => {

  //     fetchData2()

  // }, [input] )

  return (
    <PokeContext.Provider
      value={{
        value: [pokemon, setPokemon],
        value1: [load, setLoad],
        value2: [pokemon2, setPokemon2],
        value3: [input, setInput],
        value4: [team, setTeam],
        value5: [playerTeam, setPlayerTeam],
      }}
    >
      {load && children}
    </PokeContext.Provider>
  );
};
