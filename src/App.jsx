import { useState, useEffect } from 'react'
import { ReactDOM } from 'react'
import './App.css'

// import PreGame from './PreGame';
import MTGcards from './components/MTGcards';
// import GameOver from './GameOver';

function App() {

  const [gameStage, setGameStage] = useState("mtg-cards");

  const handlePlayerWin = () => {
    setGameStage("player-win");
  }

  const handleGameStart = () => {
    setGameStage("mtg-cards");
  }

  const handleGameOver = () => {
    setGameStage("game-over");
  }

  return (
    <div className="App">
      {gameStage === "pre-game" && (
        <PreGame onStartGame={handleGameStart} />
      )}

      {gameStage === "mtg-cards" && (
        <MTGcards onPlayerWin={handlePlayerWin} onGameOver={handleGameOver} />
      )}

      {gameStage === "game-over" && (
        <GameOver onRestart={handleGameStart} />
      )}
    </div>
  );
}

export default App
