import "./OptionsDiscipline.css"

const OptionsDiscipline = ({optValue}) => {
    
  return (

    <div>
            <option className="opt-disciplines" value={optValue}>{optValue}</option>
    </div>
  )
}

export default OptionsDiscipline