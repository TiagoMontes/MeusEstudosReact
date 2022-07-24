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
  console.log(words)

  return (
    <div className="App">
      {/* Se o Hook for igual a start, ele irá exibir o componente StartScreen */}
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <End />}
    </div>
  );
}

export default App;
