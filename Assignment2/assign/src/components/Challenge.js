const Challenge = () => {
    const valores = {
        a: 5,
        b: 8,
    }

    return ( 
        <div>
            <h1>Vamos somar os valores {valores.a} e {valores.b} para imprimir no console.log</h1>
            <button onClick={() => console.log(valores.pri + valores.seg)}>Some estes dois valores</button>
        </div>
     );
}
 
export default Challenge;