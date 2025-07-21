import "./FormMessenger.css"

const FormMessenger = ({ data, updateDataResults }) => {

  return (

    <div className="msn-container">
        <label className="msn-group">
          <span>Mensagem</span>
          <textarea 
          name="messenger" 
          id="id-messenger"
          placeholder="Digite sua mensagem..."
          value={data.messenger || ""}
          onChange={(e) => updateDataResults("messenger", e.target.value)}
          >
          </textarea>
        </label>
    </div>

  )
}

export default FormMessenger