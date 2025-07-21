import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

import "./Questions.css"

const FormQuestionCommand = ({ data, updateDataResults }) => {

  return (

    <div className="form-admin-container">
        <div className="desc-question">
          <h4>Qual é o seu nível de satisfação referente a gestão de liderança da empresa?</h4>
        </div>

        <div className="container-question">
          <div className="radio-response">
            <label className="response-question">
              <input type="radio"
              name="response"
              value="unsatisfield"
              required
              checked={data.reviewComm === "unsatisfield"}
              onChange={(e) => updateDataResults("reviewComm", e.target.value)}
              />
              <BsFillEmojiFrownFill/>
              <span>Insatisfeito</span>
            </label>
          </div>
          <div className="radio-response">
            <label className="response-question">
              <input type="radio"
              name="response"
              value="neutral"
              required
              checked={data.reviewComm === "neutral"}
              onChange={(e) => updateDataResults("reviewComm", e.target.value)}
              />
              <BsFillEmojiNeutralFill/>
              <span>Poderia ser melhor</span>
            </label>
          </div>
          <div className="radio-response">
            <label className="response-question">
              <input type="radio"
              name="response"
              value="satisfield"
              required
              checked={data.reviewComm === "satisfield"}
              onChange={(e) => updateDataResults("reviewComm", e.target.value)}
              />
              <BsFillEmojiSmileFill/>
              <span>Satisfeito</span>
            </label>
          </div>
          <div className="radio-response">
            <label className="response-question">
              <input type="radio"
              name="response"
              value="very_satisfield"
              required
              checked={data.reviewComm === "very_satisfield"}
              onChange={(e) => updateDataResults("reviewComm", e.target.value)}
              />
              <BsFillEmojiHeartEyesFill/>
              <span>Muito satisfeito</span>
            </label>
          </div>
        </div>

    </div>


  )
}

export default FormQuestionCommand