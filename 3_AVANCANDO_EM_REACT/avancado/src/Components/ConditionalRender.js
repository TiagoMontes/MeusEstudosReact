import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name,setName] = useState("Tiago")

    return ( 
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se for true, isso aparecerá</p>}
            {!x && <p>Se for false, isso aqui aparecerá</p>}
            <h1>IF ternário</h1>
            {name === "Tiago" ? 
                (<div>
                    <p>Olá Tiago</p>
                </div>) : 
                (<div>
                    <p>Você não é o Tiago</p>
                </div>) 
            }
            <button onClick={() => setName(name !== "Tiago" ? "Tiago" : "João")}>Clique aqui</button>
        </div>
     );
}
 
export default ConditionalRender;