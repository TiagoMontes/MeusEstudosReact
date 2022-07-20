import { useState } from "react"

const ListRender = () => {

  const [users, setUsers] = useState([
    {id: 1 , nome: "Tiago", age: 23},
    {id: 2, nome: "Uriel", age: 24},
    {id: 3, nome: "Sarah", age: 22}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nome} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender