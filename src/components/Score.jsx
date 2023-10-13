import '../styles/score.css'

function Score ({currentScore, highScore}) {

  return (
    <>
    <div className="scores-container">
      <div className="current-score"><span className="mutable-score">{currentScore}</span><span className="immutable-score"> / 5</span> Current Score</div>
      <div className="high-score">High Score: <span className="high-score">{highScore}</span></div>
    </div>
    </>
  )
}

export default Score;