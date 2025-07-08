import React, { useState } from "react";

const NovoCalculo = () => {

    let number = document.getElementById('inumber1')
    let numberCon = Number(number)

    const [number1,setNumber1] = useState(numberCon.valueOf())

    return (
        <div>
            <p>Calculo de resultados</p>
            <input type="text" id="inumber1"/><br />
            <input type="text" id="inumber2"/><br />
            <button onClick={() => setNumber1(number1.valueOf())}>Calcular</button><br />
            <label>Resultado: {number1.valueOf()}</label>
        </div>
    )

}

export default NovoCalculo