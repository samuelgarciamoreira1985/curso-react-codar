import ButtonComponent from "./ButtonComponent"

import "./FormDadosResult.css"

const FormDadosResult = ({ resetOperaction, value1, value2, value3, value4, value5 }) => {

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
                <label className="form-not-result">{value1}</label>
                <label className="form-ref-result">TRABALHO MENSAL</label>
                <label className="form-not-result">{value2}</label>
                <label className="form-ref-result">ATIVIDADE COMPLEMENTAR</label>
                <label className="form-not-result">{value3}</label>
                <label className="form-ref-result">PROVA FINAL</label>
                <label className="form-not-result">{value4}</label>
                <label className="form-ref-result">MÉDIA FINAL</label>
                <label className="form-not-result">{value5}</label>
            </form>

            <div className="form-results-buttons">
                <ButtonComponent idButton="btn-reset" textButton="REINICIAR" actionButton={resetOperaction}/>
            </div>
        </div>

        <div className="results-footer">
                <h4>SITUAÇÃO</h4>
                {/*{value5 < 5 ? () : ()}*/}
                <h3>APROVADO</h3>
        </div>

    </div>

  )
}

export default FormDadosResult