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
  const [pickWord, setPickWord] = useState();
  const [pickCategory, setPickCategory] = useState()
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
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
    const { word, category }= pickWordAndCategory()

    //Create a array of letters separating with split
    let wordLetters = word.split("")

    //Lets return each letter in lower case to avoid errors. When we don't use this, the first letter is upper Case, so this is a problem.
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    //Test in console
    console.log(word, category)
    console.log(wordLetters)
    
    // Fill states - useState
    setPickWord(word)
    setPickCategory(category)
    setLetters(letters)

    //Changing the stage
    setGameStage(stages[1].name)
  }

  //Process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //Retry process
  const retry = () => {
    setGameStage(stages[1].name)
  }

  return (
    <div className="App">
      {/* Se o Hook for igual a start, ele irá exibir o componente StartScreen */}
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <End retry={retry}/>}
    </div>
  );
}

export default App;
