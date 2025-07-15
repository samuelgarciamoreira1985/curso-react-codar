import "./ButtonComponent.css"

const ButtonComponent = ({ idButton, textButton, actionButton }) => {
  const actionClick = (e) =>{
    actionButton(e)
  }

  return (

    <div>
        <button id={idButton} onClick={actionClick}>{textButton}</button>
    </div>
  )
}

export default ButtonComponent