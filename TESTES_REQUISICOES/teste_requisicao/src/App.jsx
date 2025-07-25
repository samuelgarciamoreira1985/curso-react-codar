import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

import './App.css'

const url = ("http://localhost:3000/games")

function App() {

  const [games, setGames] = useState([])

  const [name, setName] = useState("")
  const [year, setYear] = useState("")



  const { data: itens, httpSettings } = useFetch(url)

  const handleSubmit = async (e) => {
      e.preventDefault()

      const games = {
      name,
      year
    }
    httpSettings(games, "POST")

    const gameAdd = await res.json()
    setGames((prevGames) => [...prevGames,gameAdd])
  }

  return (

    <div className='App'>
      <h2>LISTA DE GAMES</h2>
      <p>Aqui está a lista de games mais iradas...</p>
      <ul>
        {itens && itens.map((game) => (
          <li key={game.id}>Nome: {game.name} Ano: {game.year}</li>
        ))}
      </ul>

      <div className='container'>
        <form className='form-inputs' onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text"
             value={name}
             placeholder='Digite o nome do game...'
             onChange={(e) => setName(e.target.value)}
             />
          </label>

          <label>
            <span>Ano</span>
            <input type="text"
             value={year}
             placeholder='Digite o ano do game...'
             onChange={(e) => setYear(e.target.value)}
             />
          </label>

          <div className='form-actions'>
            <input className="btn" type="submit" value="Enviar"/>
          </div>
        </form>
      </div>
    </div>

  )
}

export default App
