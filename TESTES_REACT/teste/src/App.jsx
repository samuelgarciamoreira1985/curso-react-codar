import { useState } from 'react'
import './App.css'
import Propriedades from './components/Propriedades'

function App() {

  const [data] = useState(0)

  return (
      <div className='App'>
          <Propriedades calculo={data}/>
      </div>
  )
}

export default App
