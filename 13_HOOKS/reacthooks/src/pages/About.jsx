import React from 'react'
// use Context
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {

   const {contextValue} = useContext(SomeContext)

  return (

    <div>
        About
        <p>Valor do contexto: {contextValue}</p>
    </div>

  )
}

export default About