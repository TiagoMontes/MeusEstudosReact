import "./Game.css"

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      {/* Este vai ser o contador de pontuação */}
      <p className="points">
        <span>Ponturação: 000</span>
      </p>
      {/* Este vai informar uma dica sobre a palavra a ser adivinhada */}
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      {/* Esta div terá as letras sendo exibidas */}
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="letter"></span>
        <span className="blackSquare"></span>
      </div>
      {/* Esta div é onde colocaremos nossa parte a ser jogada, letra a ser inserida */}
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required/>
          <button>Jogar!</button>
        </form>
      </div>
      {/* Esta div irá armazenar e nos mostrar todas as letras erradas */}
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>e,</span>
        <span>c</span>
      </div>
    </div>
  )
}

export {Game}