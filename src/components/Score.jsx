import '../styles/score.css'

function Score ({currentScore, highScore, maxCards}) {

  return (
    <>
    <div className="scores-container">
      <div className="current-score">Current Score: <span className="mutable-score">{currentScore}</span></div>
      <div className="high-score">High Score: <span className="high-score">{highScore}</span></div>
    </div>
    </>
  )
}

export default Score;