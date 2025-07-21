import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

import "./ReviewForm.css"

const ReviewForm = ({ data, updateFielHandler }) => {

  return (

    <div className='review-form'>
        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" 
            value="unsatisfield" 
            name='review' 
            required
            checked={data.review === "unsatisfield"}
            onChange={(e) => updateFielHandler("review", e.target.value)}
            />
            <BsFillEmojiFrownFill/>
            <p>Insatisfeito</p>
          </label>
        </div>

        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio"
             value="neutral"
              name='review' 
              required
              checked={data.review === "neutral"}
              onChange={(e) => updateFielHandler("review", e.target.value)}
              />
            <BsFillEmojiNeutralFill/>
            <p>Poderia ser melhor</p>
          </label>
        </div>

        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" 
            value="satisfield" 
            name='review' 
            required
            checked={data.review === "satisfield"}
            onChange={(e) => updateFielHandler("review", e.target.value)}
            />
            <BsFillEmojiSmileFill/>
            <p>Satisfeito</p>
          </label>
        </div>

        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" 
            value="very_satisfield" 
            name='review' 
            required
            checked={data.review === "very_satisfield"}
            onChange={(e) => updateFielHandler("review", e.target.value)}
            />
            <BsFillEmojiHeartEyesFill/>
            <p>Muito satisfeito</p>
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="comment">Comentário:</label>
          <textarea name="comment" 
          id="comment" 
          placeholder="Conte como foi a sua experiência com o produto..." 
          required
          value={data.comment || ""}
          onChange={(e) => updateFielHandler("comment", e.target.value)}
          >
          </textarea>
        </div>

    </div>

  )

}

export default ReviewForm