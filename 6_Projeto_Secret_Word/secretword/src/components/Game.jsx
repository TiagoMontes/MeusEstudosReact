import { useState, useRef } from "react"
import "./Game.css"

const Game = ({ 
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses, 
  score 
}) => {
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)

    setLetter("")

    letterInputRef.current.focus()
  }

  return (
    <div className="game">
      {/* Este vai ser o contador de pontuação */}
      <p className="points">
        <span>Ponturação: {score}</span>
      </p>
      {/* Este vai informar uma dica sobre a palavra a ser adivinhada */}
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>
      {/* Esta div terá as letras sendo exibidas */}
      <div className="wordContainer">
        {letters.map((letter, i) => 
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blanckSquare"></span>
          )
        )}
      </div>
      {/* Esta div é onde colocaremos nossa parte a ser jogada, letra a ser inserida */}
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="letter" 
            maxLength="1" 
            required onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      {/* Esta div irá armazenar e nos mostrar todas as letras erradas */}
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export {Game}