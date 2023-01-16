import React from "react"
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokeContext = createContext();

export const PokeController = ({ children }) => {

const [pokemon, setPokemon] = useState([])
const [load, setLoad] = useState(false);
const [pokemon2, setPokemon2] = useState([])
const [input, setInput] = useState("")
const [team, setTeam] = useState([])

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

    fetchData()

}, [] )

const fetchData2 = async () => {

    try{
        const callData = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${input}`)
            setPokemon2(input)
            setPokemon2(callData.data);
            setLoad(true);
    
    }
    catch (err) {
        console.log(err);
      }
}

useEffect(() => {

    fetchData2()

}, [input] )

return (
        <PokeContext.Provider

            value={{
             value: [pokemon, setPokemon],
             value1 : [load, setLoad], 
             value2 : [pokemon2, setPokemon2],
             value3 : [input, setInput],
             value4 : [team, setTeam]

          }}>

                { load && children }
        </PokeContext.Provider>
      );


} 
