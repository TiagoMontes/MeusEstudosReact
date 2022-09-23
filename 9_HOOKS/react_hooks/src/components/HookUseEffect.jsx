import { useEffect, useState } from "react"
const HookUseEffect = () => {

    
    const [number, setNumber] = useState(0);
    // Toda vez que o componente é renderizado, o useEffect é executado (caso ele não possua um array de dependências)
    //No caso abaixo, a array de dependências está vazia, fazendo com que o useEffect seja executado apenas uma vez

    useEffect(() => {
        console.log("Serei executado apenas uma vez");
    },[]);
    useEffect(() => {
        console.log("Executando useEffect");
    });

    const handleChangeNumber = () => {
        setNumber(number + 1);
    }


    const handleAnotherNumber = () => {
        setAnotherNumber(anotherNumber + 1);
    }

    // 3 - item no array de dependencias
    const [anotherNumber, setAnotherNumber] = useState(0);
    useEffect(() => {
        if(anotherNumber > 0){
        console.log("Sou executado apenas quando outro número mudou");
        }
    },[anotherNumber]);

    // 4 - Cleanup do useEffect
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log("Hello word")
        //     setAnotherNumber(anotherNumber + 1);
        // }, 2000);
        // return () => clearTimeout(timer);
    }, [anotherNumber])

    return (
        <div>
            <h2>useEffect - Array de dependências vazio</h2>
            <p>Numero: {number}</p>
            <button onClick={handleChangeNumber}>Adicione +1</button>
            <hr />
            <h2>useEffect - Array de dependências preenchido</h2>
            <p>Outro número: {anotherNumber}</p>
            <button onClick={handleAnotherNumber}>Outro número</button>
            <hr />
        </div>
    )
}

export { HookUseEffect }