import React, { useState } from "react";



const Logica = () => {

    let n1 = 50
    let n2 = 50
    let res = n1 + n2
    
const [recebeSoma,setRecebeSoma] = useState(200)    

    return (
        <div>
            <div>
                <p>Valor 1: {n1}</p>
                <p>Valor 2: {n2}</p>
                <p>soma: {res}</p>
            </div>
            <div>
                <br />
                <button onClick={() => setRecebeSoma(res+recebeSoma)}>Alterar valor</button>
                <p>Valor alterado: {recebeSoma}</p>
            </div>
        </div>
    )

}

export default Logica