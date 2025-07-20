import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

import "./ReviewForm.css"

const ReviewForm = () => {

  return (

    <div className='review-form'>
        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" value="unsatisfield" name='review' required/>
            <BsFillEmojiFrownFill/>
            <p>Insatisfeito</p>
          </label>
        </div>

        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" value="neutral" name='review' required/>
            <BsFillEmojiNeutralFill/>
            <p>Poderia ser melhor</p>
          </label>
        </div>

        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" value="satisfield" name='review' required/>
            <BsFillEmojiSmileFill/>
            <p>Satisfeito</p>
          </label>
        </div>

        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" value="very_satisfield" name='review' required/>
            <BsFillEmojiHeartEyesFill/>
            <p>Muito satisfeito</p>
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="comment">Comentário:</label>
          <textarea name="comment" id="comment" placeholder="Conte como foi a sua experiência com o produto..." required></textarea>
        </div>

    </div>

  )

}

export default ReviewForm