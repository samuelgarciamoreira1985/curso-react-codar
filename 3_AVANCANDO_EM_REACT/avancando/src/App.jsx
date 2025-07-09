import './App.css'
import Logica from './components/Logica';
import NovoCalculo from './components/NovoCalculo';
import Produtos from './components/Produtos';
import Testes from './components/Testes';

// 2 - imagem em assets - importando
import night from "./assets/night.jpg";

// 3 - useState
import Data from './components/Data';

// 4 - Renderização da lista
import ListRender from './components/ListRender';
// - 7 render condicional
import ConditionalRender from './components/ConditionalRender';
// 8 - Props
import ShowUserName from './components/ShowUserName';
// 9 -Desestruturando props
import CardDetails from './components/CardDetails';

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
      <ListRender/>
      <Produtos/>
      <Testes descricao="Tomate" valor={12} qualidade="boa"/>
      {/*7 - render condicional*/}
      <ConditionalRender/>
      {/*<NovoCalculo/>*/}
      {/*8 - Props*/}
      <ShowUserName name="Carlos"/>
      {/*9 - Desestruturando props*/}
      <CardDetails brand="VW" km={999} color="Vermelho"/>
    </div>
  )
}

export default App
