//Importando um CSS
import './App.css';

//Importando um componente
import FundamentosReact from './components/FundamentosReact';
import TemplateExpressions from './components/TemplateExpressions';
import FirstComponent from "./components/FirstComponent"
import Hierarquia from './components/Hierarquia';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <FundamentosReact />
      <FirstComponent /> {/* Este possui componentes herança(sendo reaproveitado) */}
      <TemplateExpressions />
      <Hierarquia />
      <Events />
    </div>
  );
}

export default App
