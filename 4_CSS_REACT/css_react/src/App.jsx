import './App.css'
import TitlePet from './components/TitlePet'

// 2- css de componente
import MyComponent from './components/MyComponent'
  // 6 - css modules
  import Title from './components/Title'

function App() {

  // 4 - inline style dinâmico
  const n = 15
  // 5 - classes dinâmicas
  const redTitle = true

  return (
    <div className='App'>
      {/* 1 - Css global */}
      <h1>Css no react</h1>
      {/* 2 - css de componente */}
      <MyComponent/>
      <p>Pegou o Css do componente</p>
      {/* 3 - inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Esse elemento tem estilos inline</p>
      {/* 4 - inline style dinâmico */}
      <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>
        Css dinâmico
      </h2>
      <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>
        Css dinâmico
      </h2>
      {/* 5 - classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>
      {/* 6 - css modules */}
      <Title/>
      <TitlePet/>
    </div>
  )
}

export default App
