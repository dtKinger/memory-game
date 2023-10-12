import "../styles/game-over.css"

function GameOver ({onRestart}) {
  return (
    <div className="play-again" onClick={onRestart}>Play again?</div>
  )
}

export default GameOver;