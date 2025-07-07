import React from 'react'

/*const Calculo = () => {
    var n1,n2,soma
    n1 = 2
    n2 = 54
    soma = n1 + n2
    alert(soma)
}*/

function Events() {
    const handleClick = (e) => {
        alert("Execultou")
    }
  return (
    <div>
        <div>
            <button onClick={() => alert("Testando um evento")}>Clique aqui</button>
        </div>
        <div> {/*7 - Evento com função*/}
            <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
    </div>
  )
}

export default Events