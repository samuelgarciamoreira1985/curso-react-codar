import React, { useState } from 'react'

function Data() {
    let someData = 10;
    const [anotherNumber, setAnotherNumber] = useState(15)

  return (
    <div>
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Variável</button>
    </div>
    <div>
        <p>Valor {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(22)}>Mudar state</button>
    </div>
    </div>
  )
}

export default Data