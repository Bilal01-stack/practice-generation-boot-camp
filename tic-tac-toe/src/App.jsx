import GameBoard from "./componensts/GameBoard";
import Player from "./componensts/Player";
import { useState } from "react";
function App() {
const [activePlayer, setActivePlayer] = useState()
  function handleSelectSquare(){
    setActivePlayer((currActivePlayer)=> currActivePlayer === 'X' ? 'O' : 'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol= "X" />
          <Player initialName="Player 2" symbol= "O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
