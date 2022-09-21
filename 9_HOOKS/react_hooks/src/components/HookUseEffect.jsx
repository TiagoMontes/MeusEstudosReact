import { useEffect, useState } from "react"
const HookUseEffect = () => {

    // Toda vez que o componente é renderizado, o useEffect é executado
    useEffect(() => {
        console.log("Executando useEffect");
    })

    const [number, setNumber] = useState(0);

    const handleChangeNumber = () => {
        setNumber(number + 1);
    }

    return (
        <div>
            <h2>useEffect</h2>
            <p>Numero: {number}</p>
            <button onClick={handleChangeNumber}>Adicione +1</button>
            <hr />
        </div>
    )
}

export { HookUseEffect }