import { useState } from 'react'

const HookUseState = () => {
    // 1 - useState

    const userName = 'João';

    const [name, setName] = useState("Tiago");

    const changeNames = () => {

        setName("Tiago Montes");

        userName = "João Murilo";

    }
  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Colocar sobrenome</button>
    </div>
  )
}

export {HookUseState}