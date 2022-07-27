//CSS
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//Data
import {wordsList} from "./data/words"

//Components
import { StartScreen } from './components/StartScreen';
import { Game } from "./components/Game"
import { End } from "./components/End"

//Estes serão os estágios do jogo
const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"}
];

function App() {
  //Estamos pegando o primeiro item da array stages e acessando seu name
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList);
  
  //Seleção de palavras, categorias e letras
  const [pickedWord, setPickedWord] = useState();
  const [pickedCategory, setPickedCategory] = useState()
  const [letters, setLetters] = useState([])
  
  //Guessed and Wrong letters, guesses and score.
  const [guessedLetters, setGessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)
  
  const pickedWordAndCategory = () => {
    //Pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    // Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    //Desestruturando
    return { word, category }
  }


  //Starts the secret word game
  const startGame = () => {
    //Pick word and pick category
    const { word, category }= pickedWordAndCategory()

    //Create a array of letters separating with split
    let wordLetters = word.split("")

    //Lets return each letter in lower case to avoid errors. When we don't use this, the first letter is upper Case, so this is a problem.
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    //Test in console
    console.log(word, category)
    console.log(wordLetters)
    
    // Fill states - useState
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    //Changing the stage
    setGameStage(stages[1].name)
  }

  //Process the letter input
  const verifyLetter = (letter) => {
    console.log(letter)
  }

  //Retry process
  const retry = () => {
    setGameStage(stages[1].name)
  }

  return (
    <div className="App">
      {/* Se o Hook for igual a start, ele irá exibir o componente StartScreen */}
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && (
        <Game 
          verifyLetter={verifyLetter}
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <End retry={retry}/>}
    </div>
  );
}

export default App;
