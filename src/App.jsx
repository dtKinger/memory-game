import { useState, useEffect } from 'react'
import './App.css'

// import PreGame from './PreGame';
import MTGcards from './components/MTGcards';
import Score from './components/Score'
import GameOver from './components/GameOver';
import PreGame from './components/PreGame'
import Footer from './components/Footer'

function App() {

  const [gameStage, setGameStage] = useState("pre-game");
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [maxCards, setMaxCards] = useState(0);

  const handleScoreChange = () => {
    setCurrentScore(score => score + 1)
  }

  const handleGameStart = (e) => {
    setCurrentScore(0)
    setMaxCards(e.target.value)
    setGameStage("mtg-cards");
  }

  const handleGameReStart = (e) => {
    setGameStage("pre-game");
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
        <MTGcards maxCards={maxCards} onScoreChange={handleScoreChange} onGameOver={handleGameOver} />
      )}

      {gameStage === "game-over" && (
        <GameOver maxCards={maxCards} currentScore={currentScore} onRestart={handleGameReStart} />
      )}
      <Footer />
    </div>
  );
}

export default App
