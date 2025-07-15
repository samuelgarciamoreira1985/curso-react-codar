import FormDados from './components/FormDados'
import FormDadosResult from './components/FormDadosResult'
import './App.css'
import { useState } from 'react'

function App() {
  // <FormDados calcAverage={calcAverage}/>
  const [numCalcMedia,setNumCalcMedia] = useState("") // armazena o valor da média...

  //FUNÇÕES...

  const calcAverage = (e, valueMonthlyWork, valueMonthlyText, valueComplActivity, valueFinalTest) => {
   e.preventDefault()
   
   if (valueMonthlyWork === "" || valueMonthlyText === "" || valueComplActivity === "" || valueFinalTest === "")
    alert("Existe(m) campo(s) a ser(em) preenchido(s)! É preciso inserir todas as notas para efetuar o calculo da média!")
   else if (valueMonthlyWork !== ""  && valueMonthlyText !== "" && valueComplActivity !== "" && valueFinalTest !== "") { 
     
  const floatMonthlyWork = +valueMonthlyWork.replace(",",".")
  const floatMonthlyText = +valueMonthlyText.replace(",",".")
  const floatComplActivity = +valueComplActivity.replace(",",".")
  const floatFinalTest = +valueFinalTest.replace(",",".")
  const calcResult = ((floatMonthlyWork+floatMonthlyText+floatComplActivity+floatFinalTest) / 4)
  setNumCalcMedia(calcResult)
  alert(calcResult)}
  }

  //FIM DE FUNÇÕES...

  return (
    
    <div className='main-container'>
    {!numCalcMedia ? (<FormDados calcAverage={calcAverage}/>) : (<FormDadosResult/>)}
    </div>
  )
}

export default App
