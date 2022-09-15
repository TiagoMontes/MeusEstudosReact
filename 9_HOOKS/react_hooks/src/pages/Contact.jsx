import { useState } from "react"

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

  return (
    <div>
        <h1>Contact</h1>
        <p>Contato: {numero}</p>
        <p>useState Contato: {contact}</p>
        <button onClick={changeContact}>Exibir contato secreto</button>
    </div>
  )
}

export {Contact}