import './App.css'

// 2 - Importando componente
import FirstComponent from './components/FirstComponent'
// 4 - Template Expression
import TemplateExpression from './components/TemplateExpression'
// 5 - Hierarquia de componentes
import MyCompnent from './components/MyComponent'

function App() {
  // 3 - Comentários
  return (
    <div className="App">
      {/* 3 - comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyCompnent/>
    </div>
  )
}

export default App
