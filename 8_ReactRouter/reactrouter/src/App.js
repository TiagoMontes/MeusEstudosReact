import './App.css';

//1 - config react router
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// components
import { Navbar } from './components/Navbar';
import { SearchForm } from './components/SearchForm';

// pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './pages/Product'
import { Info } from './pages/Info'
import { NotFound } from './pages/NotFound'
import { Search } from './pages/Search';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* Navbar possui elementos do react router, então sou obrigado a colocar dentro do
        browser router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - Nested route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 4 - Rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 9 - Search */}
          <Route path='/search' element={<Search />}/>
          {/* 7- - No match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
