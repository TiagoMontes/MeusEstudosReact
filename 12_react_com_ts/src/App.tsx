import React from "react";

// 4 - Importing components
import { FirstComponent } from "./components/FirstComponent";

// 5 - Desestructuring props
import { SecondComponent } from "./components/SecondComponent";
import { Destructuring } from "./components/Destructuring";

function App() {

  // 1 - Variables
  const name: string = "Tiago";
  const age: number = 23;
  const isWorking: boolean = true;

  // 2 - Functions
  const userGreeting = (name: string) : string => { 
    return `Hello ${name}`;
  };

  return (
    <div className="App">
      <h1>Typescript with React</h1>
      <h2>Name: {name}</h2>
      <p>Age {age}</p>
      {isWorking && <p>Is working!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="JOHN CENA" />
      <Destructuring
        title="My first Destructuring with Typescript and React"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
        commentsQty={10}
        tags={["react", "typescript", "javascript"]}
      />
      <Destructuring
        title="Okay, this is another Destructuring with Typescript and React"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. (again)"
        commentsQty={15}
        tags={["Java🤨", "Python🐍", "Assembly💀"]}
      />
    </div>
  );
}

export default App;