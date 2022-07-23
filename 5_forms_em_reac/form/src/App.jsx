import './App.css';
import { MyForms } from './components/MyForms';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForms user={{name: "Tiago", email: "tiagosantos6303@gmail.com", bio:"Eu sou um programador", role:"admin"}}/>
    </div>
  );
}

export default App;
