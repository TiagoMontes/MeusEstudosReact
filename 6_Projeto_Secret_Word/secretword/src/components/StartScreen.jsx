import "./StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Click in the button to start the game</p>
        <button onClick={startGame}>Start Game</button>
    </div>
  )
}

export {StartScreen}