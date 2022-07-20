import './App.css';
import { MyComponent } from "./components/MyComponent"
import { useState } from "react"
import {Title} from './components/Title';


function App() {
  const n = 15;
  
  const [nome, setNome] = useState("Tiago")

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red",}}>
        Este elemento foi estlizado em forma inline
      </p>
      {/* Inline style dinâmico */}
      <h2 
        style={ n < 10 ? {color: "purple"} : {color: "pink"}}>
          CSS DINÂMICO
      </h2>
      <h2 
        style={ n > 10 ? {color: "purple"} : {color: "pink"}}>
          CSS DINÂMICO
      </h2>
      {/* <h2 
        style={ nome === "Tiago" ? {color: "blue", backgroundColor: "gold"} : null}>
          Teste nome
      </h2> */}
      {/* Classes dinâmicas */}
      <h2 className={nome === "Tiago" ? "texto1" : "texto2"}>Olá {nome}</h2>
      <button onClick={()=> setNome(nome === "Tiago" ? "Bruno" : "Tiago")}>Mude o nome</button>
      {/* CSS Modules */}
      <Title />
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
