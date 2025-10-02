import React, { useReducer } from 'react'

const Login = () => {

    const initialState = {
        "name": "",
        "password": ""
    }

    const reducer = (state,action) => {
        switch(action.type) {
            case "ADD_NAME": 
            return { name: state.name}
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState)

  return (

    <div>
        <form>
        <div style={{display:"flex", flexDirection:"row",gap:"30px"}}>
            <label style={{display:"flex",flexDirection:"row"}}>
                <span>Senha:</span>
                <input type="text"
                placeholder='Digite a senha'
                />
            </label>
            <label style={{display:"flex",flexDirection:"row"}}>
                <span>Usuário</span>
                <input type="text"
                placeholder='Digite o usuário'
                value={state.name}
                />
            </label>
            <button type='button' onClick={() => dispatch({ type:"NADD_NAME"})}>adicionar nome</button>
        </div>
        </form>
    </div>

  )
}

export default Login