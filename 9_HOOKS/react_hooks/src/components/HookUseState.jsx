import { useState } from 'react'

const HookUseState = () => {
  // 1 - useState

  let userName = 'João';

  const [name, setName] = useState("Tiago");

  const changeNames = () => {

    setName("Tiago Montes");

    userName = "João Murilo";
  }

  // 2 - useState e Input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  }


  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Colocar sobrenome</button>
      {/* 2 - useState e input */}
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>idade: {age}</p>
      <hr />
    </div>
  )
}

export { HookUseState }