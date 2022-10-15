import React from "react";

// 4 - Importing components
import { FirstComponent } from "./components/FirstComponent";

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
    </div>
  );
}

export default App;