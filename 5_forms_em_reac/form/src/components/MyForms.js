import "./MyForms.css"

import { useState } from "react"

const MyForms = () => {
    // 3 - Gerenciamento de dados
    const [name,setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
        
    }
    console.log(name)
    

  return (
    <div>
        {/* 1 - Criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome"
                    onChange={handleName}
                />
                <p>{name}</p>
            </div>
            {/* 2 - Label envolvendo input */}
            <label htmlFor="">
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite o seu e-mail" />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export {MyForms}