import './App.css'

// 2- css de componente
import MyComponent from './components/MyComponent'

function App() {

  return (
    <div className='App'>
      {/* 1 - Css global */}
      <h1>Css no react</h1>
      {/* 2 - css de componente */}
      <MyComponent/>
      <p>Pegou o Css do componente</p>
    </div>
  )
}

export default App
