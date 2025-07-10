import './App.css'
import Logica from './components/Logica';
import NovoCalculo from './components/NovoCalculo';
import Produtos from './components/Produtos';
import Testes from './components/Testes';
import Testes2 from './components/Testes2';

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

// 11 - Renderização de listas com componente 
const cars = [
  {id: 1, brand: "ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 200000},
  {id: 3, brand: "Renault", color: "Azul", km: 32000}
]
// Teste...
const linguages = [
  {id: 1, description:"HTML"},
  {id: 2, description:"CSS"},
  {id: 3, description:"javascript"},
  {id: 4, description:"React"}
]

// 12 - Fragments
import Fragment from './components/Fragment';

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
      {/* 10 - Reaproveitamento de componentes */}
      <CardDetails brand="FIAT" km={234} color="Verde"/>
      <CardDetails color="Azul" brand="HONDA" km={567}/>
      {/* 11 - Renderização de listas com componente */}
      {cars.map((car) => (
        <CardDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
      {/* Teste2 - Linguages */}
      {linguages.map((ling) => (
        <Testes2 key={ling.id} description={ling.description}/>
      ))}
      {/* 12 - Fragments */}
      <Fragment/>
    </div>
  )
}

export default App
