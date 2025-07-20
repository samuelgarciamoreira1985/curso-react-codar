import "./Steps.css"
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"
import { FiSend } from "react-icons/fi"

const Steps = ({ currenteStep }) => {

  return <div className="steps">

        <div className="step active">
            <AiOutlineUser/>
            <p>Identificação</p>
        </div>

        <div className={`step ${currenteStep >= 1 ? "active" : ""}`}>
            <AiOutlineStar/>
            <p>Avaliação</p>
        </div>

        <div className={`step ${currenteStep >= 2 ? "active" : ""}`}>
            <FiSend/>
            <p>Envio</p>
        </div>

  </div>

    

  
}

export default Steps