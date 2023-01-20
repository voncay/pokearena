import aiteam from "./ai.json";
import { PokeContext } from "../Context/PokeContext";
import { useContext, useState } from "react";
import Overlay from "react-overlay-component";

const BattleErika = () => {
  const [ai, setAi] = useState(aiteam)
  const { value5 } = useContext(PokeContext);
  const [playerTeam, setPlayerTeam] = value5;
  const [battleTeam, setBattleTeam] = useState({
    pokemon1: {
      pokemonImg: playerTeam[0].sprites.versions["generation-v"]["black-white"].animated
      .back_default,
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
  const [turn, setTurn] = useState(0);
  const [myTeamStatus, setMyTeamStatus] = useState([1, 1, 1, 1]);
  const [ennemyTeamStatus, setennemyTeamStatus] = useState([1, 1, 1]);
  const [badges, setBadges] = useState([0, 0, 0, 0]);

  // const [aiChoice, setAIChoice] = useState("");
  const [playerChoice, setPlayerChoice]= useState("")
  const [winner, setWinner] = useState('')
  const [player, setPlayer]= useState(battleTeam.pokemon1)
  const [opponent, setOpponent] = useState(aiteam.Erika.pokemon1)
  const [playerHealth, setPlayerHealth] = useState(player.pokemonHP);
  const [opponentHealth, setOpponentHealth] = useState(opponent.pokemonHP);
 console.log('ai',ai)

  
  const [showMoves, setShowMoves] = useState(false);
  const [showPokeList, setShowPokeList] = useState(false);

  const [showPokemon1, setShowPokemon1] = useState(true);
  const [showPokemon2, setShowPokemon2] = useState(false);
  const [showPokemon3, setShowPokemon3] = useState(false);
  const [showPokemon4, setShowPokemon4] = useState(false);
  // options = ["attackOne", "attackTwo", "attackThree", "attackFour"]

  // initialisation
 
/* let indexPok = 1
indexPok ++
const nexPokObject = `pokemon${indexPok}` 

 */

/*   console.log(opponent.pokemonName)
  console.log(index)
  console.log(nextPokemon)
 */

  //// test barbara

  const sequenceAi = () => {
    const options = ["attackOne", "attackTwo", "attackThree", "attackFour"];
    const aiChoice = options[ Math.floor(Math.random() * options.length) ];
    const damage = opponent.pokemonAttacks[aiChoice].damage
    setPlayerHealth( health => health - damage)
    setTurn(0)
  }
  
  let nbrchangeant = (num) => {
    if(num)
return num ++
  }
  //  myobj[Object.keys(myobj)[0]];
  //aiteam.Erika[Object.keys(aiteam.Erika)[indexOpponent]]
console.log(ai.Erika.pokemon1)
  const handleDamage = (damage) => {
    setOpponentHealth( h =>  h - damage > 0 ? h - damage : 0 )
  aiteam.Erika.pokemon1.pokemonHP === 0 && setOpponent(aiteam.Erika.pokemon2 )
  aiteam.Erika.pokemon2.pokemonHP === 0 && setOpponent(aiteam.Erika.pokemon3 )    
  aiteam.Erika.pokemon3.pokemonHP === 0 && setOpponent(undefined)

  
};
      
       // const keys = Object.keys(aiteam.Erika)
      // let index = keys.indexOf("pokemon1")
      
      // let nextPokemon = keys[index+1]
      // setOpponent(aiteam.Erika[nextPokemon])


 

  const sequencePlayer = () => {
    //
  };

  const fightSequence = () => {  // only for one fight sur le onplayer
    if (turn === 0) {
      sequencePlayer()
      if (opponentHealth <= 0) {
        setWinner('player') /// condition pour passer au combat suivant ou désisgner une équipe vainqueur.
      } else {
        fightSequence() // recursion
      }
    }
    else{
      sequenceAi()
      if (playerHealth <= 0){
        setWinner('opponent')
      } else {
        fightSequence() // recursion
      }
    }
  }

  //// fin test Barbara



  const Moves = () => {
    return (
      <>
        <img className="movesframedialog" src="/dialog_frame_bgon.png" alt="" />

        <img
          onClick={() => setShowMoves(!showMoves)}
          className="closemoves"
          src="/closemove.png"
          alt=""
        />

        {showPokemon1 && (
          <div className="movelistarena">
            <h1 onClick={() => {
                setOpponentHealth(opponentHealth - battleTeam.pokemon1.pokemonAttacks.attackOne.damage); opponentHealth  <= 0 ? setOpponent(aiteam.Erika.pokemon2) : sequenceAi(); 
              }}
            
             >{battleTeam.pokemon1.pokemonAttacks.attackOne.name}</h1>
            <h1 onClick={() => handleDamage(battleTeam.pokemon1.pokemonAttacks.attackTwo.damage) }>{battleTeam.pokemon1.pokemonAttacks.attackTwo.name}</h1>
            <h1 onClick={() => handleDamage(battleTeam.pokemon1.pokemonAttacks.attackFour.damage) }>{battleTeam.pokemon1.pokemonAttacks.attackFour.name}</h1>
          </div>
        )}

        {showPokemon2 && (
          <div className="movelistarena">
            <h1 onClick={() => handleDamage(battleTeam.pokemon1.pokemonAttacks.attackOne.damage) }>{battleTeam.pokemon2.pokemonAttacks.attackOne.name}</h1>
            <h1 onClick={() => handleDamage(battleTeam.pokemon1.pokemonAttacks.attackTwo.damage) }>{battleTeam.pokemon2.pokemonAttacks.attackTwo.name}</h1>
            <h1 onClick={() => handleDamage(battleTeam.pokemon1.pokemonAttacks.attackThree.damage) }
            >{battleTeam.pokemon2.pokemonAttacks.attackThree.name}</h1>
            <h1 onClick={() => handleDamage(battleTeam.pokemon1.pokemonAttacks.attackFour.damage) }
            >{battleTeam.pokemon2.pokemonAttacks.attackFour.name}</h1>
          </div>
        )}

        {showPokemon3 && (
          <div className="movelistarena">
            <h1 onClick={() => handleDamage(battleTeam.pokemon1.pokemonAttacks.attackOne.damage) }>{battleTeam.pokemon3.pokemonAttacks.attackOne.name}</h1>
            <h1 onClick={() => handleDamage("attackwo")}>{battleTeam.pokemon3.pokemonAttacks.attackTwo.name}</h1>
            <h1 onClick={() => handleDamage("attackThree")}>{battleTeam.pokemon3.pokemonAttacks.attackThree.name}</h1>
            <h1 onClick={() => handleDamage("attackFour")}>{battleTeam.pokemon3.pokemonAttacks.attackFour.name}</h1>
          </div>
        )}

        {showPokemon4 && (
          <div className="movelistarena">
            <h1 onClick={() => handleDamage(battleTeam.pokemon4.pokemonAttacks.attackThree.damage)}>{battleTeam.pokemon4.pokemonAttacks.attackOne.name}</h1>
            <h1 onClick={() => handleDamage(battleTeam.pokemon4.pokemonAttacks.attackThree.damage)}>{battleTeam.pokemon4.pokemonAttacks.attackTwo.name}</h1>
            <h1 onClick={() => handleDamage(battleTeam.pokemon4.pokemonAttacks.attackThree.damage)}>{battleTeam.pokemon4.pokemonAttacks.attackThree.name}</h1>
            <h1 onClick={() => handleDamage(battleTeam.pokemon4.pokemonAttacks.attackFour.damage)}>{battleTeam.pokemon4.pokemonAttacks.attackFour.name}</h1>
          </div>
        )}
      </>
    );
  };

  console.log(showPokemon1);
  console.log(showPokemon2);
  console.log(showPokemon3);
  console.log(showPokemon4);

  const PokeList = () => {
    return (
      <div className="listtest">
        <div classame="pokemonlistinbattle">
          <h1 className="pokelisttext">Switch Pokemon ?</h1>
          <img
            onClick={() => setShowPokeList(!showPokeList)}
            className="closepokelist"
            src="/closemove.png"
            alt=""
          />
          <div className="framePoke">
            <img
              onClick={() => {
                setShowPokemon1(true);
                setPlayer(battleTeam.pokemon1)
                setShowPokemon2(false);
                setShowPokemon3(false);
                setShowPokemon4(false);
                setShowPokeList(!showPokeList);
              }}
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
              onClick={() => {
                setShowPokemon1(false);
                setShowPokemon2(true);
                setPlayer(battleTeam.pokemon2)
                setShowPokemon3(false);
                setShowPokemon4(false);
                setShowPokeList(!showPokeList);
              }}
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
              onClick={() => {
                setShowPokemon1(false);
                setShowPokemon2(false);
                setShowPokemon3(true);
                setPlayer(battleTeam.pokemon3) ;
                 setShowPokemon4(false);
                setShowPokeList(!showPokeList);
              }}
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
              onClick={() => {
                setShowPokemon1(false);
                setShowPokemon2(false);
                setShowPokemon3(false);
                setShowPokemon4(true);
                setPlayer(battleTeam.pokemon4);

                setShowPokeList(!showPokeList);
              }}
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
    );
  };

console.log(aiteam)
  const EnemyPokemon = () => {

    return(
      <div>
      { opponent === aiteam.Erika.pokemon1 &&
      <img className="aipokemon"src={aiteam.Erika.pokemon1.pokemonImg} alt="" />
      }
      { opponent === aiteam.Erika.pokemon2 &&
      <img className="aipokemon"src={aiteam.Erika.pokemon2.pokemonImg} alt="" />
      }
      { opponent === aiteam.Erika.pokemon3 &&
      <img className="aipokemon"src={aiteam.Erika.pokemon3.pokemonImg} alt="" />
      }
      
      </div>


    )
  }

  // console.log(playerTeam)

  const ShowActivePokemon1 = () => {
    return (
      <div className="erikapage">
        <div className="erikaarenaframe">
          <img
            className="player1pokemon"
            src={battleTeam.pokemon1.pokemonImg}
            alt=""
          />
          <button
            className="arenafightmenu"
            onClick={() => setShowMoves(!showMoves)}
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
            HP : {playerHealth}
          </p>

          <p className="p2pokemoninfos">
            {opponent.pokemonName}
            <br />
            Level : {opponent.pokemonLevel}
            <br />
            HP : {opponentHealth}
          </p>
          <img className="infoframeleft" src="/info_frame_left.png" alt="" />
        </div>
      </div>
    );
  };

  console.log(player)


  const ShowActivePokemon2 = () => {
    return (
      <div className="erikapage">
        <div className="erikaarenaframe">
          <img
            className="player1pokemon"
            src={battleTeam.pokemon2.pokemonImg}
            alt=""
          />
          <button
            className="arenafightmenu"
            onClick={() => setShowMoves(!showMoves)}
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
          {showPokeList ? <PokeList /> : null}{" "}
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
            {aiteam.Erika.pokemon1.pokemonName}
            <br />
            Level : {aiteam.Erika.pokemon1.pokemonLevel}
            <br />
            HP : {aiteam.Erika.pokemon1.pokemonHP}
          </p>
          <img className="infoframeleft" src="/info_frame_left.png" alt="" />
        </div>
      </div>
    );
  };

  

  const ShowActivePokemon3 = () => {
    return (
      <div className="erikapage">
        <div className="erikaarenaframe">
          <img
            className="player1pokemon"
            src={battleTeam.pokemon3.pokemonImg}
            alt=""
          />
          <button
            className="arenafightmenu"
            onClick={() => setShowMoves(!showMoves)}
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
    );
  };

  const ShowActivePokemon4 = () => {
    return (
      <div className="erikapage">
        <div className="erikaarenaframe">
          <img
            className="player1pokemon"
            src={battleTeam.pokemon4.pokemonImg}
            alt=""
          />
          <button
            className="arenafightmenu"
            onClick={() => setShowMoves(!showMoves)}
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
    );
  };

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

  // console.log(
  //   playerTeam[0].sprites.versions["generation-v"]["black-white"].animated
  //     .back_default
  // );

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



  // console.log(playerTeam);
  // console.log(battleTeam);
  // console.log("testyplayer", playerTeam[0].stats[3].base_stat);
  // console.log("testy", battleTeam.pokemon1.pokemonAttacks.attackOne.name);
  // console.log("testy2", battleTeam.pokemon1.pokemonAttacks.attackOne.damage);

  // console.log(battleTeam);

  // if pokemon is dead

  // if no more pokemon to fight

  return (
    <>
      <EnemyPokemon />
      {showPokemon1 && 
<ShowActivePokemon1 />}

      {showPokemon2 && <ShowActivePokemon2 />}

      {showPokemon3 && <ShowActivePokemon3 />}

      {showPokemon4 && <ShowActivePokemon4 />}
    </>

    // <div className="erikapage">
    //   <div className="erikaarenaframe">
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

export default BattleErika;
