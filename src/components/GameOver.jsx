import "../styles/game-over.css"

function GameOver ({currentScore, onRestart, maxCards}) {

  const howItEnded = currentScore == maxCards ?
  <div className="you-won" onClick={onRestart}>You Won with {currentScore}! <br></br><br></br>Click to play again</div> :
  <div className="play-again" onClick={onRestart}>You Lose! But you scored {currentScore}. <br></br><br></br>Click to play again</div>

  return (
    <>
    {howItEnded}
    </>
  )
}

export default GameOver;