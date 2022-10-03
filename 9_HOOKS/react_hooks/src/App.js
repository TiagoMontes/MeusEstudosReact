import './App.css';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import { HookUseContext } from './components/HookUseContext';

//pages
import { Home } from './pages/Home';
import { About } from './pages/About'
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="App">
      <h1>Teste</h1>
      <h1>React Hooks</h1>
      <HookUseContext>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
