import React from 'react'

/*const Calculo = () => {
    var n1,n2,soma
    n1 = 2
    n2 = 54
    soma = n1 + n2
    alert(soma)
}*/
const CalculoMedia = (n1,n2) => {
        n1 = 1
        n2 = 4
        var res = n1 + n2
        if (res >= 5){
            return alert("passou")
        }else {
            return alert("Não passou")
        }
    }

function Events() {
    const handleClick = (e) => {
        alert("Execultou")
    }

    // 8 - Função de renderização
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Renderizando outra coisa!</h1>
        }
    }

    // return 10 > 2 && <p>Carregando...</p>

  return (
    <div>
        <div>
            <button onClick={() => alert("Testando um evento")}>Clique aqui</button>
        </div>
        <div> {/*7 - Evento com função*/}
            <button onClick={handleClick}>Clique aqui - com função</button>
            <div><button onClick={CalculoMedia}>Calcular</button></div>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
        
    </div>
  )
}

export default Events