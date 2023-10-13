import "../styles/pre-game.css"

function PreGame ({onStartGame}) {

  return (
    <div className="greeting">
      <h2>Welcome to Memory Magic!</h2>
      <p>Select each card once and only once. How many unique cards can you choose in a row?</p>
      <button onClick={onStartGame} className="start-game">Start Game</button>
    </div>
  )
}

export default PreGame;