import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

const emojiData = {
  unsatisfield: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfield: <BsFillEmojiSmileFill/>,
  very_satisfield: <BsFillEmojiHeartEyesFill/>
}

import "./FormResults.css"

const FormResults = ({ data }) => {

  return (

    <div className="container-results">
        <div className="header-results">
          <h2>Sua avaliação foi realizada com sucesso!</h2>
          <p>Aqui está o resumo da sua avaliação </p>
        </div>

        <div className="results-info">
          <div className="data-user">
            <span>Nome: {data.name}</span>
            <span>Email: {data.email}</span>
          </div>

          <div className="data-results">
            <span>Gestão Administrativa {emojiData[data.reviewAdmin]}</span>
            <span>Gestão Operacional {emojiData[data.reviewOper]}</span>
            <span>Liderança {emojiData[data.reviewComm]}</span>
            <span>Mensagem: {data.messenger}</span>
          </div>
        </div>
        <span className="msn-finish">Para concluir sua avaliação, por favor clique no botão Enviar logo abaixo.</span>
    </div>

  )
}

export default FormResults