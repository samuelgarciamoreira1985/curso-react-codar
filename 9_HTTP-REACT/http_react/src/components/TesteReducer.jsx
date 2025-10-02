import React from 'react'
import { useReducer } from 'react'

const TesteReducer = () => {

    const initialState = {
        count: 0
    }
    
    const reducer = (state,action) => {
        switch(action.type) {
            case "SOMA": 
            return { count: state.count++ } 
            case "TIRA": 
            return { count: state.count-- } 
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState)

  return (

    <div>
        <button onClick={() => dispatch({ type: "SOMA" })}>teste</button>
        <p>Contador: {state.count}</p>
    </div>

  )
}

export default TesteReducer