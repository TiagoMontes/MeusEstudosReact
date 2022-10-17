import React from "react";

// 4 - Importing components
import { FirstComponent } from "./components/FirstComponent";

// 5 - Desestructuring props
import { SecondComponent } from "./components/SecondComponent";
import { Destructuring, Category } from "./components/Destructuring";

// 6 - useState
import { State } from "./components/State";

// 8 - type
type textOrNull = string | null;



function App() {

  // 1 - Variables
  const name: string = "Tiago";
  const age: number = 23;
  const isWorking: boolean = true;

  // 2 - Functions
  const userGreeting = (name: string) : string => { 
    return `Hello ${name}`;
  };

  // 8 - type
  const myText: textOrNull = "Have some text here";
  let mySecondText: textOrNull = null;

  // Quando comento a linha abaixo, o null é considerado falso, então o texto não é exibido
  // mySecondText = "Ops, Now i have some text here too";

  type fixed = "Isso" | "ou" | "aquilo";
  // Vamos testar o fixed
  // const fixedText: fixed = "asd"; - ERRO
  const fixedText: fixed = "Isso";


  return (
    <div className="App">
      <h1>Typescript with React</h1>
      <h2>Name: {name}</h2>
      <p>Age {age}</p>
      {isWorking && <p>Is working!</p>}
      <h3>{userGreeting(name)}</h3>
      <hr />
      <FirstComponent />
      <SecondComponent name="JOHN CENA" />
      <hr />
      <Destructuring
        title="My first Destructuring with Typescript and React"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
        commentsQty={10}
        tags={["react", "typescript", "javascript"]}
        category={Category.TS}
      />
      <Destructuring
        title="Okay, this is another Destructuring with Typescript and React"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. (again)"
        commentsQty={15}
        tags={["Java🤨", "Python🐍", "Assembly💀"]}
        category={Category.JS}
      />
      <State />
      <hr />
      {myText && <p>Have text in the variable</p>}
      {mySecondText && <p>Have text in the variable</p>}
      {fixedText && <p>Fixed test</p>}
      <p>Just testing</p>
    </div>
  );
}

export default App;