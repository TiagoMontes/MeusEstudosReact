import './App.css';

import City from "./assets/city.jpg"
import ConditionalRender from './Components/ConditionalRender';
import ListRender from './Components/ListRender';
import ManageData from './Components/ManageData';
import { ShowUserName } from './Components/ShowUserName';
import { CarDetails } from './Components/CarDetails';
import { Fragment } from "./Components/Fragment"
import { Container } from './Components/Container';
import {ExecuteFunction} from './Components/ExecuteFunction';
import { useState } from 'react';
import { Message } from './Components/Message';
import { ChangeMessageState } from './Components/ChangeMessageState';

function App() {

  const dados = {
    name:"Tiago",
    age: 23,
    job: "Software Engineer",
  }

  const cars = [
    {id:1, brand: "Ferrari", color: "Vermelho", newCar: true, km:0},
    {id:2, brand: "Jaguar", color: "Preto", newCar: false, km:15120},
    {id:3, brand: "Nissan", color: "Cinza", newCar: false, km:55120},
  ]

  const carro = {
    id:0,
    brand:"Ferrari",
    km: 0,
    color: "vermelho",
  }

  function showMessage() {
    console.log("Evento do componente pai!!!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em Asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName 
        nome={dados.name} 
        idade={dados.age} 
        profissao={dados.job}
      />
      {/* Destructuring Props */}
      <CarDetails 
        key={carro.id}
        brand={carro.brand} 
        km={carro.km} 
        color={carro.color}
        newCar={true}
      />
      {/* Reaproveitando componente */}
      <CarDetails 
        brand="Ford" 
        km="0" 
        color="Azul"
        newCar={true}
      />
      <CarDetails 
        brand="Ford" 
        km="1.000" 
        color="Azul"
        newCar={false}
      />
      {/* Loop em array de objetos */}
      {cars.map((car)=> (
        <CarDetails
          key={car.id} 
          brand={car.brand} 
          km={car.km} 
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* Fragments */}
      <Fragment propFragment="Tiago"/>
      {/* Children prop */}
      <Container myValue="100">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="80">
        <h5>Testando container</h5>
      </Container>
      {/* executar função em props */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;