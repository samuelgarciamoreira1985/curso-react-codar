import { AiOutlineUser, AiOutlineStar } from "react-icons/ai" // Usuário e Conclusão
import { IoIosApps } from "react-icons/io" // Administração
import { ImSteam2 } from "react-icons/im" // Operação
import { ImEye } from "react-icons/im" // Liderança
import { ImCheckmark } from "react-icons/im" // Conclusão

import { ImBubble2 } from "react-icons/im" // Mensagem

import "./Steps.css"

const Steps = ({ currentSteps }) => {

  return (

    <div className="main-steps">
        <div className="icon-steps active">
            <AiOutlineUser/>
            <p>Identificação</p>
        </div>

        <div className={`icon-steps ${currentSteps >= 1 ? "active" : ""}`}>
            <IoIosApps/>
            <p>Administração</p>
        </div>

        <div className={`icon-steps ${currentSteps >= 2 ? "active" : ""}`}>
            <ImSteam2/>
            <p>Operação</p>
        </div>

        <div className={`icon-steps ${currentSteps >= 3 ? "active" : ""}`}>
            <ImEye/>
            <p>Liderança</p>
        </div>

        <div className={`icon-steps ${currentSteps >= 4 ? "active" : ""}`}>
            <ImBubble2/>
            <p>Mensagem</p>
        </div>

        <div className={`icon-steps ${currentSteps >= 5 ? "active" : ""}`}>
            <ImCheckmark/>
            <p>Conclusão</p>
        </div>
    </div>

  )
}

export default Steps