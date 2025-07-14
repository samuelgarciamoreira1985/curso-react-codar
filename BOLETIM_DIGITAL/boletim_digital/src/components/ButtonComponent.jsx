import "./ButtonComponent.css"

const ButtonComponent = ({ idButton, textButton, actionButton }) => {

  return (

    <div>
        <button id={idButton}>{textButton}</button>
    </div>
  )
}

export default ButtonComponent