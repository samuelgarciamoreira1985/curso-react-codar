import OptionsDiscipline from "./OptionsDiscipline"
import ButtonComponent from "./ButtonComponent"
import "./FormDados.css"
import "./ButtonComponent.css"
import "../data/data"
import { dataDisciplines } from "../data/data"
import { useRef, useState } from "react"

const FormDados = ({ calcAverage }) => {

  const [u_discipline,setDiscipline] = useState("") // Disciplina...
  const [monthlyWork,setMonthlyWork] = useState("") // Trabalho mensal
  const [monthlyText,setMonthlyText] = useState("") // Prova mensal...
  const [complActivity,setComplActivity] = useState("") // Atividade complementar...
  const [finalTest,setFinalTest] = useState("") // Prova final...
  // FUNÇÕES...

    const inputRef = useRef(null)
    const setFocus = () =>{
      inputRef.current.focus()
    }
  
  
  const clearForm = (e) => {
    e.preventDefault()
    setDiscipline("")
    setMonthlyWork("")
    setMonthlyText("")
    setComplActivity("")
    setFinalTest("")

    setFocus()
  }

  const validDigits = (textValid) => { // MÁSCARA DOS INPUTS...SOMENTE NÚMEROS E VIRGULAS
    return textValid.replace(/[^0-9,]/g, "")
  }

  const valid_MonthlyWork = (e) => { // Validação do campo TRABALHO MENSAL...
    const update_MonthlyWork = validDigits(e.target.value)
    setMonthlyWork(update_MonthlyWork)
  }

  const validMonthlyText = (e) => { // Validação do campo PROVA MENSAL...
    const updateMonthlyText = validDigits(e.target.value)
    setMonthlyText(updateMonthlyText)
  }

  const validComplActivity = (e) => {
    const updateComplActivity = validDigits(e.target.value)
    setComplActivity(updateComplActivity)
  }

  const validFinalTest = (e) => {
    const updateFinalTest = validDigits(e.target.value)
    setFinalTest(updateFinalTest)
  }

  //FIM DE FUNÇÕES 

  return (

    <div id="general-container">
        <form id="form-dados-container">
            <div id="form-header"> 
                <h2>BOLETIM DIGITAL</h2>
                <h3>SELECIONE A DISCIPLINA</h3>
                <select id="selDiscipline">
                    {dataDisciplines.map((item) => (
                    <OptionsDiscipline key={item.id} optValue={item.discipline}/>
                    ))
                    }
                </select>
                
            </div>

            <div id="form-inputs">
                    <label htmlFor="i-trabalho-mensal">NOTA1: TRABALHO MENSAL</label>
                    <input type="text" id="i-trabalho-mensal" name="n-trabalho-mensal" placeholder="Digite a nota do trabalho mensal" onChange={(e) => valid_MonthlyWork(e)} value={monthlyWork} ref={inputRef} required/>

                    <label htmlFor="i-prova-mensal">NOTA2: PROVA MENSAL</label>
                    <input type="text" id="i-prova-mensal" name="n-prova-mensal" placeholder="Digite a nota da prova mensal" onChange={(e) => validMonthlyText(e)} value={monthlyText} required/>

                    <label htmlFor="i-atividade-complementar">NOTA3: ATIVIDADE COMPLEMENTAR</label>
                    <input type="text" id="i-atividade-complementar" name="n-atividade-complementar" placeholder="Digite a nota da atividade complementar" onChange={(e) => validComplActivity(e)} value={complActivity} required/>

                    <label htmlFor="i-prova-final">NOTA4: PROVA FINAL</label>
                    <input type="text" id="i-prova-final" name="n-prova-final" placeholder="Digite a nota da prova final" onChange={(e) => validFinalTest(e)} value={finalTest} required/>
            </div>

            <div id="form-buttons">
                    <ButtonComponent idButton="btn-calcular-media" textButton="GERAR BOLETIM" actionButton={(e) => calcAverage(e, monthlyWork, monthlyText, complActivity, finalTest)}/>
                    <ButtonComponent idButton="btn-limpar" textButton="LIMPAR" actionButton={clearForm}/>                   
            </div>

            <div id="form-footer">
                    
            </div>
        </form>
    </div>

  )
}

export default FormDados