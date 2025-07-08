import './App.css'
import Logica from './components/Logica';
import NovoCalculo from './components/NovoCalculo';

// 2 - imagem em assets - importando
import night from "./assets/night.jpg";

// 3 - useState
import Data from './components/Data';

function App() {
  return (
    <div className='App' style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 1 - imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data/>
      <Logica/>
      {/*<NovoCalculo/>*/}
    </div>
  )
}

export default App
