import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

import "./Thanks.css"

const emojiData = {
  unsatisfield: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfield: <BsFillEmojiSmileFill/>,
  very_satisfield: <BsFillEmojiHeartEyesFill/>
}

const Thanks = ({ data }) => {

  return (

    <div className="thanks-container">
        <h2>Falta pouco...</h2>
        <p>A sua opnião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
        <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
        <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
        <p className="review-data">
          <span>Satisfação com o produto:</span>
          {emojiData[data.review]}
        </p>
        <p className="review-data">
          <span>Comentário:</span>
          {data.comment}
        </p>
    </div>

  )
}

export default Thanks