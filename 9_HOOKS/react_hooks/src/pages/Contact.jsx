import { useState, useReducer, useEffect, useRef, useCallback, useMemo } from "react"
import Child1 from "../components/Child1";
import Child2 from "../components/Child2";

const Contact = () => {
    
    var numero = "(xx) xxxxx-xxxx";

    const [contact, setContact] = useState("(xx) xxxxx-xxxx");

    const changeContact = () => {
        
        setContact("(68) 99999-9999");   
        numero = "(68) 99999-9999";

        //Ambos estão mudando aqui no console.log, mas no HTML só o setContact está mudando
        console.log(contact);
        console.log(numero);
    }

    const [number, setNumber] = useState("68 99999-9999");

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(number);
      setNumber("")
    }

  const funcao = (state, acao) => {
    switch(acao) {
      case "incrementar":
      return state + 1;

      case "decrementar":
      return state - 1;

      default:
      return 0;
    }
  }
  const [contador, executarFuncao] = useReducer (funcao, 0);

  // useEffect

  useEffect(() => {
    console.log("Executando useEffect no Contador");
  },[contador])

  // useRef
  const count = useRef(0)
  const inputRef = useRef();
  const buttonRef = useRef()

  // 3 - useMemo x react memo x useCallback
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);
  const handleIncrement2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  // useMemo
  const chooseColor = useMemo(() => {
    for(let i = 0; i < 10 ** 9; i += 1){
      i += 1;
      i -= 1;
    }


    if(count1 % 2 === 0) {
      return "red";
    }
    if (count1 % 3 === 0) {
      return "blue";
    }
    if (count1 % 5 === 0) {
      return "green";
    }

    return "orange";
  }, [count1]);

  return (
    <div>
        <h1>Contact with useState</h1>
        <p>Contact: {numero}</p>
        <p>useState Contact: {contact}</p>
        <button onClick={changeContact}>Display secret contact</button>
        <hr />
        <form onSubmit={handleSubmit}>
          <h3>onChange / onSubmit</h3>
          <label>Enter your number: </label>
          <input 
            type="text" 
            value={number} 
            onChange={(e) => setNumber(e.target.value)}
          />
          <input type="submit" value="Enviar" />
        </form>
        <p>My number is: {number}</p>
        <hr />
        <h2>useReducer e useEffect</h2>
        <p>Encrementador: {contador}</p>
        <button onClick={e => executarFuncao("incrementar")}>Encremente</button>
        <button onClick={e => executarFuncao("decrementar")}>Decremente</button>
        <hr />
        <h2>useRef</h2>
        <h3>Contador: {count.current}</h3>
        <input 
          type="text"
          ref={inputRef}
        />
        <button onClick={() => {
          inputRef.current.value += "valor";
          console.log(inputRef.current);
          inputRef.current.focus();
          
          buttonRef.current.click();
          // count.current += 1

          // console.log("count",count.current);
          // console.log("count2",count2);
          // console.log("a");
        }}>Incremente</button>
        <button 
          onClick={() => alert("Clicou!")}
          ref={buttonRef}
        >Alerta!</button>
        {/* 3 - React Memo */}
        <h2>Contando</h2>
        <Child1 color={chooseColor} value={count1} setValue={handleIncrement1}/>
        <Child2 color={chooseColor} value={count2} setValue={handleIncrement2}/>
    </div>
  )
}

export {Contact}