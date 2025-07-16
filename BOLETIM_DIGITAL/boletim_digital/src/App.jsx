import FormDados from './components/FormDados'
import FormDadosResult from './components/FormDadosResult'
import './App.css'
import { useState } from 'react'

function App() {
  // <FormDados calcAverage={calcAverage}/>
  const [numCalcMedia,setNumCalcMedia] = useState("") // armazena o valor da média...
  const [resultValue1,setResultValue1] = useState("")
  const [resultValue2,setResultValue2] = useState("")
  const [resultValue3,setResultValue3] = useState("")
  const [resultValue4,setResultValue4] = useState("")
  const [resultValue5,setResultValue5] = useState("")

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
  //alert(calcResult)

  
  setResultValue1(floatMonthlyWork)
  setResultValue2(floatMonthlyText)
  setResultValue3(floatComplActivity)
  setResultValue4(floatFinalTest)
  setResultValue5(calcResult)
}

  
  }

  const resetOperaction = (e) => {
    e.preventDefault()
    setResultValue1("")
    setResultValue2("")
    setResultValue3("")
    setResultValue4("")
    setResultValue5("")
    setNumCalcMedia("")
  }

  //FIM DE FUNÇÕES...

  return (
    
    <div className='main-container'>
    {!numCalcMedia ? (<FormDados calcAverage={calcAverage}/>) : (<FormDadosResult value1={resultValue1} value2={resultValue2} value3={resultValue3} value4={resultValue4} value5={resultValue5} resetOperaction={resetOperaction}/>
    )}
    </div>
  )
}

export default App
