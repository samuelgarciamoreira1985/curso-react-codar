import OptionsDiscipline from "./OptionsDiscipline"
import ButtonComponent from "./ButtonComponent"
import "./FormDados.css"
import "../data/data"
import { dataDisciplines } from "../data/data"

const FormDados = () => {

  return (

    <div id="general-container">
        <form id="form-dados-container">
            <div id="form-header"> 
                <h2>BOLETIM DIGITAL</h2>
                <h3>SELECIONE A DISCIPLINA</h3>
                <select id="selDiscipline">
                    {dataDisciplines.map((item) => (
                    <OptionsDiscipline key={item.id} optValue={item.discipline}/>
                    ))}
                </select>
                
            </div>

            <div id="form-inputs">
                    <label htmlFor="i-trabalho-mensal">NOTA1: TRABALHO MENSAL</label>
                    <input type="text" id="i-trabalho-mensal" name="n-trabalho-mensal" placeholder="Digite a nota do trabalho mensal" required/>

                    <label htmlFor="i-prova-mensal">NOTA2: PROVA MENSAL</label>
                    <input type="text" id="i-prova-mensal" name="n-prova-mensal" placeholder="Digite a nota da prova mensal" required/>

                    <label htmlFor="i-atividade-complementar">NOTA3: ATIVIDADE COMPLEMENTAR</label>
                    <input type="text" id="i-atividade-complementar" name="n-atividade-complementar" placeholder="Digite a nota da atividade complementar" required/>

                    <label htmlFor="i-prova-final">NOTA4: PROVA FINAL</label>
                    <input type="text" id="i-prova-final" name="n-prova-final" placeholder="Digite a nota da prova final" required/>
            </div>

            <div id="form-buttons">
                    <ButtonComponent id="btn-calcular-media" textButton="CALCULAR MÉDIA"/>
                    <ButtonComponent id="btn-calcular-media" textButton="LIMPAR"/>
                    <ButtonComponent id="btn-calcular-media" textButton="GERAR BOLETIM"/>
            </div>

            <div form-footer>

            </div>
        </form>
    </div>

  )
}

export default FormDados