import React, { useState, ChangeEvent } from 'react'
// ChangeEvent é um tipo de evento do React que é usado para tipar o evento de mudança de um input. Padroniza o tipo de evento que é passado para a função handleChange. O ChangeEvent é um tipo genérico, então é necessário passar o tipo do elemento que está sendo alterado. No caso, é um input, então é necessário passar o tipo HTMLInputElement. 

const State = () => {

    // 6 - useState
    const [text, setText] = useState<string | null>('Testing Hook with useState 🤯');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <p>The text is: {text}</p>
            <input type="text" onChange={handleChange} placeholder='Write something cool :)'/>
        </div>
  )
}

export {State}