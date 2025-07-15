import ButtonComponent from "./ButtonComponent"

import "./FormDadosResult.css"

const FormDadosResult = () => {

  return (

    <div id="general-container-results">
        <div className="results-header">
            <h2>BOLETIM DIGITAL</h2>
            <h3>RESULTADOS OBTIDOS</h3>
        </div>

        <div className="results-discipline">
            <h4>DISCIPLINA</h4>
            <h5>LINGUA PORTUGUESA</h5>
        </div>

        <div className="form-results-general">
            <form className="form-results-info">
                <label className="form-ref-result">PROVA MENSAL</label>
                <label className="form-not-result">10</label>
                <label className="form-ref-result">TRABALHO MENSAL</label>
                <label className="form-not-result">10</label>
                <label className="form-ref-result">ATIVIDADE COMPLEMENTAR</label>
                <label className="form-not-result">10</label>
                <label className="form-ref-result">PROVA FINAL</label>
                <label className="form-not-result">10</label>
            </form>

            <div className="form-results-buttons">
                <ButtonComponent idButton="btn-reset" textButton="REINICIAR"/>
            </div>
        </div>

        <div className="results-footer">
                <h4>SITUAÇÃO</h4>
                <h3>APROVADO</h3>
        </div>

    </div>

  )
}

export default FormDadosResult