import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = "João"
    const [name, setName] = useState("Matheus")

    const changeNames = () => {
        userName = "João Souza"
        setName("Matheus Battisti")
    }

    // 2 - usestate e input
    const [age, setAge] = useState(18)
    const handleSubmit = (e) => {
        e.preventDefault()

        // envio a uma API
        console.log(age)
    }


  return (

    <div>
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        {/* 2 - usestate e input */}
        <p>Digite a sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="Enviar"/>
        </form>
        <p>Você tem {age} anos</p>
        <hr />
    </div>

  )
}

export default HookUseState