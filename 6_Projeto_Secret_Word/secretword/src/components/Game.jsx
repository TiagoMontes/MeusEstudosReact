import "./Game.css"

const Game = ({ verifyLetter, pickWord , pickCategory}) => {
  return (
    <div className="game">
      <h1>PHASE 2</h1>
      <h2>{pickCategory}</h2>
      <h3>{pickWord}</h3>
      <button onClick={verifyLetter}>End the game</button>
    </div>
  )
}

export {Game}