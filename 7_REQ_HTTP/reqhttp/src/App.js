import './App.css';

import { useState, useEffect } from "react"

// 4 - Custom Hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  // 4- Custom Hook
  const {data: items, httpConfig, loading, error} = useFetch(url);

  const [name,setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data)
  //   }

  //   fetchData();
  // },[])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    // const res = await fetch(url,{
    //   method: "POST",
    //   headers: {
    //     "Content-type":"application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // 3 - Carregamento dinâmico
    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    //5- refatorando POST
    httpConfig(product, "POST")

    setName("")
    setPrice("")
  };

  // 8 - Desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <div className='add-product'>
          <form className="formul" onSubmit={handleSubmit}>
            <h2>Adicionar produto</h2>
            <label>
              <input 
                className='product'
                type="text" 
                value={name} 
                name="name" 
                onChange={(e) => setName(e.target.value)}
                placeholder="Produto"
                />
            </label>
            <label>
              <input 
                className='price'
                type="number" 
                value={price} 
                name="price" 
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Preço"
                />
            </label>
            {/* 7 - State de Loading no post */}
            {loading && <input type="submit" disabled value="Aguarde"/>}
            {!loading && <input className="adicionar" type="submit" value="Adicionar"/>}
          </form>
      </div>
      <div className='lista'>
       <h1>Lista de Produtos</h1>
        {/* 6 - Loading */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
                <button onClick={() => handleRemove(product.id)}>Excluir</button>
              </li>
            ))}
        </ul>
        )} 
      </div>
    </div>
  );
}

export default App;
