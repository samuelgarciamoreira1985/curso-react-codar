import './App.css'

import FormMain from './components/FormMain'
import FormQuestionAdmin from "./components/FormQuestionAdmin"
import FormQuestionOperation from "./components/FormQuestionOperation"
import FormQuestionCommand from "./components/FormQuestionCommand"
import FormMessenger from './components/FormMessenger'

import Steps from './components/Steps'

// Ícones
import { ImUndo2, ImRedo2  } from "react-icons/im"
import { FiSend } from "react-icons/fi"
import { useForm } from './hooks/useForm'
import { useState } from 'react'
import FormResults from './components/FormResults'

// Fim - Imports*******************************************

const dataTemplate = {
  name: "",
  email: "",
  reviewAdmin: "",
  reviewOper: "",
  reviewComm: "",
  messenger: ""
}

function App() {

  const [data,setData] = useState(dataTemplate)

  const updateDataResults = (key, value) => {
      setData((prevData) => {
        return {...prevData, [key]: value}
      })
  }

  const formComponents = [
  <FormMain data={data} updateDataResults={updateDataResults}/>,  
  <FormQuestionAdmin data={data} updateDataResults={updateDataResults}/>,
  <FormQuestionOperation data={data} updateDataResults={updateDataResults}/>,
  <FormQuestionCommand data={data} updateDataResults={updateDataResults}/>,
  <FormMessenger data={data} updateDataResults={updateDataResults}/>,
  <FormResults data={data}/>
]

  const { currentStep,currentComponent,changeSteps, isLastStep, isFirstStep } = useForm(formComponents)

  return (

    <div className='App'>
      <h3>Pesquisa de Clima</h3>
      <p>Ficamos felizes e muito gratos em ter você aqui. Por favor preencha os dados seguindo o passo a passo para concluir o envio das suas informações!</p>
      
      <form className='form-container' onSubmit={(e) => changeSteps(currentStep + 1,e)}>
     
      <Steps currentSteps={currentStep}/>
      {/* Área de componentes */}
        <div className='form-components'>
          {currentComponent}
        </div>
      {/* Fim **********Área de componentes */}

        <div className='form-buttons'>
          {!isFirstStep && (
          <button onClick={(e) => changeSteps(currentStep - 1,e)}>
            <ImUndo2 className='app-icon-button'/>
            Voltar
          </button>) }

          {!isLastStep ? (
            <button>
            Avançar
            <ImRedo2  className='app-icon-button'/>
          </button>
          ) : (<button onClick={(e) => alert("Agradecemos por participar da nossa pesquisa de clima. Sua avaliação foi enviada com sucesso!")}>
            Enviar
            <FiSend className='app-icon-button'/>
          </button>)}  
          
        </div>

      </form>

    </div>

  )
}

export default App
