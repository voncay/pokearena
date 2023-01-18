import '../fonts/pokemon_game.ttf'
import React from "react"
import '../App.css';

import {Link} from "react-router-dom"

const Homepage = () => {


    return (
        <div className="Homepage">
    
        <img className='homepokelogo' src='/Pokearena_pixel.png' alt="" /> 
        <h1 className="hometitle">Battle your way to the Indigo League !</h1>
        <Link to="/select">
        <p className='hometext'>Start The Adventure !</p>
        </Link>
     
        </div>
      );
}

export default Homepage