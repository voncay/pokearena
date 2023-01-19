import aiteam from "./ai.json";
import { PokeContext } from "../Context/PokeContext";
import { useContext, useState } from "react";
import Overlay from "react-overlay-component";

const BattleBrock = () => {
  const { value5 } = useContext(PokeContext);
  const [playerTeam, setPlayerTeam] = value5;
  const [turn, setTurn] = useState(0);
  const [myTeamStatus, setMyTeamStatus] = useState([1, 1, 1, 1]);
  const [ennemyTeamStatus, setennemyTeamStatus] = useState([1, 1, 1]);
  const [badges, setBadges] = useState([0, 0, 0, 0]);

  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

  const [isOpen1, setOverlay1] = useState(false);
  const closeOverlay1 = () => setOverlay1(false);

  const [isOpen2, setOverlay2] = useState(false);
  const closeOverlay2 = () => setOverlay2(false);

  const [isOpen3, setOverlay3] = useState(false);
  const closeOverlay3 = () => setOverlay3(false);

  const [showMoves, setShowMoves] = useState(false)
  const [showPokeList, setShowPokeList] = useState(false)

  const [showPokemon1, setShowPokemon1] = useState(true)
  const [showPokemon2, setShowPokemon2] = useState(false)
  const [showPokemon3, setShowPokemon3] = useState(false)
  const [showPokemon4, setShowPokemon4] = useState(false)


  


  const Moves = () => {
return(
  <>
  <img className="movesframedialog" src="/dialog_frame_bgon.png" alt="" />

  <img    onClick={() => 
           setShowMoves(!showMoves)}className="closemoves" src="/closemove.png" alt="" />

    <div className="movelistarena" >
    <h1>
  {battleTeam.pokemon1.pokemonAttacks.attackOne.name}
    </h1>
    <h1>
  {battleTeam.pokemon1.pokemonAttacks.attackTwo.name}
    </h1>
    <h1>
  {battleTeam.pokemon1.pokemonAttacks.attackThree.name}
    </h1>
    <h1>
  {battleTeam.pokemon1.pokemonAttacks.attackFour.name}
    </h1>
     </div>
     </>
)
  }


  const PokeList = () => {
    return(
      <div className="listtest">
      <div classname="pokemonlistinbattle">
      <h1 className="pokelisttext">Switch Pokemon ?</h1>
      <img    onClick={() => 
           setShowPokeList(!showPokeList)}className="closepokelist" src="/closemove.png" alt="" />
      <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[0].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon1.pokemonName} <br />
                      Type : {battleTeam.pokemon1.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>

                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[1].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon2.pokemonName} <br />
                      Type : {battleTeam.pokemon2.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>

                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[2].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon3.pokemonName} <br />
                      Type : {battleTeam.pokemon3.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>
                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[3].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon4.pokemonName} <br />
                      Type : {battleTeam.pokemon4.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>
            

      </div>
 
         </div>
    )
      }







console.log(playerTeam)

  const configs = {
    animate: true,
  };

  const configs1 = {
    animate: true,
  };
  const configs2 = {
    animate: true,
  };
  const configs3 = {
    animate: true,
  };

const ShowActivePokemon1 = () => {

  return(

    <div className="brockpage">
    <div className="brockarenaframe">
      <img
        className="player1pokemon"
        src={battleTeam.pokemon1.pokemonImg}
        alt=""
      />
      <button
        className="arenafightmenu"
        onClick={() => 
         setShowMoves(!showMoves)}
      >
        Fight
      </button>
      {showMoves ? <Moves /> : null}

      <button
        className="arenapokemonmenu"
        onClick={() => {
          setShowPokeList(!showPokeList);
        }}
      >
        Pokemon
      </button>
        {showPokeList ? <PokeList /> : null}

      <img
        className="dialogframearenap1"
        src="/dialog_frame_bgon.png"
        alt=""
      />
      <img className="infoframeright" src="/info_frame_right.png" alt="" />

      <p className="p1pokemoninfos">
        {battleTeam.pokemon1.pokemonName}
        <br />
        Level : {battleTeam.pokemon1.pokemonLevel}
        <br />
        HP : {battleTeam.pokemon1.pokemonHP}
      </p>

      <p className="p2pokemoninfos">
        {battleTeam.pokemon1.pokemonName}
        <br />
        Level : {battleTeam.pokemon1.pokemonLevel}
        <br />
        HP : {battleTeam.pokemon1.pokemonHP}
      </p>
      <img className="infoframeleft" src="/info_frame_left.png" alt="" />
    </div>
  </div>


  )
}


const ShowActivePokemon2 = () => {

  return(

    <div className="brockpage">
    <div className="brockarenaframe">
      <img
        className="player1pokemon"
        src={battleTeam.pokemon2.pokemonImg}
        alt=""
      />
      <button
        className="arenafightmenu"
        onClick={() => 
         setShowMoves(!showMoves)}
      >
        Fight
      </button>
      {showMoves ? <Moves /> : null}

      <button
        className="arenapokemonmenu"
        onClick={() => {
          setOverlay1(true);
        }}
      >
        Pokemon
      </button>
      <Overlay configs={configs1} isOpen={isOpen1} closeOverlay={closeOverlay2}>
        <div className="arenapokemonmenuframe">
          <div className="teamframearenamenu">

          <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[0].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon1.pokemonName} <br />
                      Type : {battleTeam.pokemon1.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>

                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[1].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon2.pokemonName} <br />
                      Type : {battleTeam.pokemon2.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>

                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[2].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon3.pokemonName} <br />
                      Type : {battleTeam.pokemon3.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>
                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[3].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon4.pokemonName} <br />
                      Type : {battleTeam.pokemon4.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>
              
          </div>
        </div>
      
      </Overlay>

      <img
        className="dialogframearenap1"
        src="/dialog_frame_bgon.png"
        alt=""
      />
      <img className="infoframeright" src="/info_frame_right.png" alt="" />

      <p className="p1pokemoninfos">
        {battleTeam.pokemon2.pokemonName}
        <br />
        Level : {battleTeam.pokemon2.pokemonLevel}
        <br />
        HP : {battleTeam.pokemon2.pokemonHP}
      </p>

      <p className="p2pokemoninfos">
        {battleTeam.pokemon2.pokemonName}
        <br />
        Level : {battleTeam.pokemon2.pokemonLevel}
        <br />
        HP : {battleTeam.pokemon2.pokemonHP}
      </p>
      <img className="infoframeleft" src="/info_frame_left.png" alt="" />
    </div>
  </div>


  )
}

const ShowActivePokemon3 = () => {

  return(

    <div className="brockpage">
    <div className="brockarenaframe">
      <img
        className="player1pokemon"
        src={battleTeam.pokemon3.pokemonImg}
        alt=""
      />
      <button
        className="arenafightmenu"
        onClick={() => 
         setShowMoves(!showMoves)}
      >
        Fight
      </button>
      {showMoves ? <Moves /> : null}

      <button
        className="arenapokemonmenu"
        onClick={() => {
          setOverlay2(true);
        }}
      >
        Pokemon
      </button>
      <Overlay configs={configs2} isOpen={isOpen2} closeOverlay={closeOverlay2}>
        <div className="arenapokemonmenuframe">
          <div className="teamframearenamenu">
            
          <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[0].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon1.pokemonName} <br />
                      Type : {battleTeam.pokemon1.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>

                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[1].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon2.pokemonName} <br />
                      Type : {battleTeam.pokemon2.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>

                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[2].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon3.pokemonName} <br />
                      Type : {battleTeam.pokemon3.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>
                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[3].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon4.pokemonName} <br />
                      Type : {battleTeam.pokemon4.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>
              
          </div>
        </div>
      
      </Overlay>

      <img
        className="dialogframearenap1"
        src="/dialog_frame_bgon.png"
        alt=""
      />
      <img className="infoframeright" src="/info_frame_right.png" alt="" />

      <p className="p1pokemoninfos">
        {battleTeam.pokemon3.pokemonName}
        <br />
        Level : {battleTeam.pokemon3.pokemonLevel}
        <br />
        HP : {battleTeam.pokemon3.pokemonHP}
      </p>

      <p className="p2pokemoninfos">
        {battleTeam.pokemon3.pokemonName}
        <br />
        Level : {battleTeam.pokemon3.pokemonLevel}
        <br />
        HP : {battleTeam.pokemon3.pokemonHP}
      </p>
      <img className="infoframeleft" src="/info_frame_left.png" alt="" />
    </div>
  </div>


  )
}


const ShowActivePokemon4 = () => {

  return(

    <div className="brockpage">
    <div className="brockarenaframe">
      <img
        className="player1pokemon"
        src={battleTeam.pokemon4.pokemonImg}
        alt=""
      />
      <button
        className="arenafightmenu"
        onClick={() => 
         setShowMoves(!showMoves)}
      >
        Fight
      </button>
      {showMoves ? <Moves /> : null}

      <button
        className="arenapokemonmenu"
        onClick={() => {
          setOverlay3(true);
        }}
      >
        Pokemon
      </button>
      <Overlay configs={configs3} isOpen={isOpen3} closeOverlay={closeOverlay3}>
        <div className="arenapokemonmenuframe">
          <div className="teamframearenamenu">
          
          <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[0].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon1.pokemonName} <br />
                      Type : {battleTeam.pokemon1.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>

                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[1].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon2.pokemonName} <br />
                      Type : {battleTeam.pokemon2.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>

                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[2].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon3.pokemonName} <br />
                      Type : {battleTeam.pokemon3.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>
                <div className="framePoke">
                  <img
                    className="pteamimg"
                    src={
                      playerTeam[3].sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt=""
                  />
                  <div className="introtextframe">
                    <p>
                      {" "}
                      Name : {battleTeam.pokemon4.pokemonName} <br />
                      Type : {battleTeam.pokemon4.pokemonType}
                      <br />
                      Level : 100
                    </p>
                  </div>
                </div>
              
          </div>
        </div>
      
      </Overlay>

      <img
        className="dialogframearenap1"
        src="/dialog_frame_bgon.png"
        alt=""
      />
      <img className="infoframeright" src="/info_frame_right.png" alt="" />

      <p className="p1pokemoninfos">
        {battleTeam.pokemon4.pokemonName}
        <br />
        Level : {battleTeam.pokemon4.pokemonLevel}
        <br />
        HP : {battleTeam.pokemon4.pokemonHP}
      </p>

      <p className="p2pokemoninfos">
        {battleTeam.pokemon4.pokemonName}
        <br />
        Level : {battleTeam.pokemon4.pokemonLevel}
        <br />
        HP : {battleTeam.pokemon4.pokemonHP}
      </p>
      <img className="infoframeleft" src="/info_frame_left.png" alt="" />
    </div>
  </div>


  )
}




  const badgesCondition = (initialValueBadges) =>
    badges.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValueBadges
    );

  const aliveCondition = (initialValueTeam) => {
    initialValueTeam.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValueTeam
    );
  };

  const gameStatus = (myTeamStatus) => {
    return aliveCondition(myTeamStatus) === 0 ? 0 : 1;
  };

  const pokemonHealthAlly = (num) => {
    if (battleTeam.pokemon(num).pokemonHP === 0) {
      setBattleTeam();
    }
  };

  console.log(
    playerTeam[0].sprites.versions["generation-v"]["black-white"].animated
      .back_default
  );

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [battleTeam, setBattleTeam] = useState({
    pokemon1: {
      pokemonImg: playerTeam[0].sprites.back_default,
      pokemonName: playerTeam[0].name,
      pokemonLevel: 100,
      pokemonHP: 300,
      pokemonType: playerTeam[0].types[0].type.name,
      pokemonAttacks: {
        attackOne: {
          name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)]
            .move.name,
          damage: playerTeam[0].stats[3].base_stat,
          type: "",
        },
        attackTwo: {
          name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)]
            .move.name,
          damage: playerTeam[0].stats[2].base_stat,
          type: "",
        },
        attackThree: {
          name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)]
            .move.name,
          damage: playerTeam[0].stats[1].base_stat,
          type: "",
        },
        attackFour: {
          name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)]
            .move.name,
          damage: playerTeam[0].stats[4].base_stat,
          type: "",
        },
      },
    },

    pokemon2: {
      pokemonImg:
        playerTeam[1].sprites.versions["generation-v"]["black-white"].animated
          .back_default,
      pokemonName: playerTeam[1].name,
      pokemonLevel: 100,
      pokemonHP: 300,
      pokemonType: playerTeam[1].types[0].type.name,
      pokemonAttacks: {
        attackOne: {
          name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)]
            .move.name,
          damage: playerTeam[1].stats[3].base_stat,
          type: "",
        },
        attackTwo: {
          name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)]
            .move.name,
          damage: playerTeam[1].stats[2].base_stat,
          type: "",
        },
        attackThree: {
          name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)]
            .move.name,
          damage: playerTeam[1].stats[1].base_stat,
          type: "",
        },
        attackFour: {
          name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)]
            .move.name,
          damage: playerTeam[1].stats[4].base_stat,
          type: "",
        },
      },
    },

    pokemon3: {
      pokemonImg:
        playerTeam[2].sprites.versions["generation-v"]["black-white"].animated
          .back_default,
      pokemonName: playerTeam[2].name,
      pokemonLevel: 100,
      pokemonHP: 300,
      pokemonType: playerTeam[2].types[0].type.name,
      pokemonAttacks: {
        attackOne: {
          name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)]
            .move.name,
          damage: playerTeam[2].stats[3].base_stat,
          type: "",
        },
        attackTwo: {
          name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)]
            .move.name,
          damage: playerTeam[2].stats[2].base_stat,
          type: "",
        },
        attackThree: {
          name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)]
            .move.name,
          damage: playerTeam[2].stats[1].base_stat,
          type: "",
        },
        attackFour: {
          name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)]
            .move.name,
          damage: playerTeam[2].stats[4].base_stat,
          type: "",
        },
      },
    },

    pokemon4: {
      pokemonImg:
        playerTeam[3].sprites.versions["generation-v"]["black-white"].animated
          .back_default,
      pokemonName: playerTeam[3].name,
      pokemonLevel: 100,
      pokemonHP: 300,
      pokemonType: playerTeam[3].types[0].type.name,
      pokemonAttacks: {
        attackOne: {
          name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)]
            .move.name,
          damage: playerTeam[3].stats[3].base_stat,
          type: "",
        },
        attackTwo: {
          name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)]
            .move.name,
          damage: playerTeam[3].stats[2].base_stat,
          type: "",
        },
        attackThree: {
          name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)]
            .move.name,
          damage: playerTeam[3].stats[1].base_stat,
          type: "",
        },
        attackFour: {
          name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)]
            .move.name,
          damage: playerTeam[3].stats[4].base_stat,
          type: "",
        },
      },
    },
  });

  // console.log(playerTeam);
  // console.log(battleTeam);
  // console.log("testyplayer", playerTeam[0].stats[3].base_stat);
  // console.log("testy", battleTeam.pokemon1.pokemonAttacks.attackOne.name);
  // console.log("testy2", battleTeam.pokemon1.pokemonAttacks.attackOne.damage);

  console.log(battleTeam);

  // if pokemon is dead

  // if no more pokemon to fight

  return (
    <>
    <ShowActivePokemon1 />
    {showPokemon2 ? <ShowActivePokemon2 /> :    <ShowActivePokemon1 />
 }
    {showPokemon3 ? <ShowActivePokemon3 /> :     <ShowActivePokemon1 />
}
    {showPokemon4 ? <ShowActivePokemon4 /> :     <ShowActivePokemon1 />
}



  

    </>
    

    // <div className="brockpage">
    //   <div className="brockarenaframe">
    //     <img
    //       className="player1pokemon"
    //       src={battleTeam.pokemon1.pokemonImg}
    //       alt=""
    //     />
    //     <button
    //       className="arenafightmenu"
    //       onClick={() => 
    //        setShowMoves(!showMoves)}
    //     >
    //       Fight
    //     </button>
    //     {showMoves ? <Moves /> : null}

    //     <button
    //       className="arenapokemonmenu"
    //       onClick={() => {
    //         setOverlay(true);
    //       }}
    //     >
    //       Pokemon
    //     </button>
    //     <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
    //       <div className="arenapokemonmenuframe">
    //         <div className="teamframearenamenu">
    //           {playerTeam.length === 4 &&
    //             playerTeam.map((e, i) => (
    //               <div className="framePoke">
    //                 <img
    //                   className="pteamimg"
    //                   src={
    //                     e.sprites.versions["generation-v"]["black-white"]
    //                       .animated.front_default
    //                   }
    //                   alt=""
    //                 />
    //                 <div className="introtextframe">
    //                   <p>
    //                     {" "}
    //                     Name : {e.name} <br />
    //                     Type : {e.types[0].type.name}
    //                     <br />
    //                     Level : 100
    //                   </p>
    //                 </div>
    //               </div>
    //             ))}
    //         </div>
    //       </div>
        
    //     </Overlay>

    //     <img
    //       className="dialogframearenap1"
    //       src="/dialog_frame_bgon.png"
    //       alt=""
    //     />
    //     <img className="infoframeright" src="/info_frame_right.png" alt="" />

    //     <p className="p1pokemoninfos">
    //       {battleTeam.pokemon1.pokemonName}
    //       <br />
    //       Level : {battleTeam.pokemon1.pokemonLevel}
    //       <br />
    //       HP : {battleTeam.pokemon1.pokemonHP}
    //     </p>

    //     <p className="p2pokemoninfos">
    //       {battleTeam.pokemon1.pokemonName}
    //       <br />
    //       Level : {battleTeam.pokemon1.pokemonLevel}
    //       <br />
    //       HP : {battleTeam.pokemon1.pokemonHP}
    //     </p>
    //     <img className="infoframeleft" src="/info_frame_left.png" alt="" />
    //   </div>
    // </div>
  );
};

export default BattleBrock;
