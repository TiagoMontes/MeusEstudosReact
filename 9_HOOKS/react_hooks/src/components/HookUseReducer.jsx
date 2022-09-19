import { useReducer } from "react"

const HookUseReducer = () => {
    //1 - Começando com o useReducer
    //state é number
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    })

  return (
    <div>
        <h2>Hook UseReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número</button>
        <hr />
    </div>
  )
}

export {HookUseReducer}