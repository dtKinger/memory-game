import "../styles/pre-game.css"

function PreGame ({onStartGame}) {

  return (
    <div className="greeting">
      <h2>Welcome to Memory Magic!</h2>
      <p>Select each card once and only once. How many unique cards can you choose in a row?</p>
      <p>Choose Difficulty</p>
      <div className="difficulties">
        
        <button onClick={onStartGame} className="start-game" value="5">5 cards</button>
        <button onClick={onStartGame} className="start-game" value="7">7 cards</button>
        <button onClick={onStartGame} className="start-game" value="10">10 cards</button>
      </div>
      
    </div>
  )
}

export default PreGame;