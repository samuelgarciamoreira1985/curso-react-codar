import "./ImcCalc.css"

const ImcCalc = () => {
  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div id="form-control">
                    <label htmlFor="heigth">Altura:</label>
                    <input type="text" name="heigth" id="heigth" placeholder="Exemplo 1,75"/>
                </div>
                <div id="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight" placeholder="Exemplo 70.5"/>
                </div>
                <button>Calcular</button>
                <button>Limpar</button>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc