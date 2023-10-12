import '../styles/score.css'

function Score ({currentScore, highScore}) {

  console.log('Score and high score')
  return (
    <>
    <div className="scores-container">
      <div className="current-score"><span className="mutable-score">{currentScore}</span><span className="immutable-score">/ 10</span> Current Score</div>
      <div className="high-score">High Score: <span className="high-score">{highScore}</span></div>
    </div>
    </>
  )
}

export default Score;