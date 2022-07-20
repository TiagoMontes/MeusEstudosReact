import { useState } from "react"

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(10);

  return (
    <div>
        {/* Este não funciona pois a variável não renderiza */}
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Valor</button>
        </div>
        <div>
            {/* Este funciona pois a variável está sendo renderizada através do useState */}
            <p>Valor: {number}</p>
            <button onClick={()=> setNumber(number === 10 ? 15 : 10 )}>Mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData