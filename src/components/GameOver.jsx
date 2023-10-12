import "../styles/game-over.css"

function GameOver ({currentScore, onRestart}) {

  const howItEnded = currentScore === 5 ?
  <div className="you-won" onClick={onRestart}>You Won with {currentScore}!</div> :
  <div className="play-again" onClick={onRestart}>You Lose! But you scored {currentScore}</div>

  return (
    <>
    {howItEnded}
    </>
  )
}

export default GameOver;