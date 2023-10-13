import '../styles/score.css'

function Score ({currentScore, highScore, maxCards}) {

  return (
    <>
    <div className="scores-container">
      <div className="current-score"><span className="mutable-score">{currentScore}</span><span className="immutable-score"> / {maxCards}</span> Current Score</div>
      <div className="high-score">High Score: <span className="high-score">{highScore}</span></div>
    </div>
    </>
  )
}

export default Score;