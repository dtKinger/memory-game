import { useState, useEffect } from 'react'
import './App.css'

// import PreGame from './PreGame';
import MTGcards from './components/MTGcards';
import Score from './components/Score'
import GameOver from './components/GameOver';
import PreGame from './components/PreGame'

function App() {

  const [gameStage, setGameStage] = useState("pre-game");
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [maxCards, setMaxCards] = useState(10);

  const handleScoreChange = () => {
    setCurrentScore(score => score + 1)
  }

  const handlePlayerWin = () => {
    setGameStage("player-win");
  }

  const handleGameStart = () => {
    setCurrentScore(score => 0)
    setGameStage("mtg-cards");
  }

  const handleGameOver = () => {
    if (currentScore > highScore){
      setHighScore(currentScore)
    }
    
    setGameStage("game-over");
  }

  return (
    <div className="App">
      <Score maxCards={maxCards} currentScore={currentScore} highScore={highScore}/>
      {gameStage === "pre-game" && (
        <PreGame onStartGame={handleGameStart} />
      )}

      {gameStage === "mtg-cards" && (
        <MTGcards onScoreChange={handleScoreChange} onGameOver={handleGameOver} />
      )}

      {gameStage === "game-over" && (
        <GameOver currentScore={currentScore} onRestart={handleGameStart} />
      )}
    </div>
  );
}

export default App
