import "../styles/pre-game.css"

function PreGame ({onStartGame}) {

  return (
    <div className="greeting">
      <h2>Welcome to Memory Magic!</h2>
      <p>Select each card once and only once. How many unique cards can you choose in a row?</p>
      <p>Choose Difficulty</p>
      <div className="difficulties">
        
        <button onClick={onStartGame} className="start-game" value="5">Easy</button>
        <button onClick={onStartGame} className="start-game" value="7">Medium</button>
        <button onClick={onStartGame} className="start-game" value="10">Hard</button>
      </div>
      
    </div>
  )
}

export default PreGame;