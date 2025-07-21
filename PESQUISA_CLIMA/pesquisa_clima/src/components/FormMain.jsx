import { FaUser } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

import "./FormMain.css"

const FormMain = ({ data, updateDataResults }) => {

  return (

    <div className="main-container">
        
        <div className="main-input">
            <label>
                <span>Nome</span>
                <input type="text"
                name="name"
                id="id-name"
                placeholder="Digite seu nome..."
                required
                maxLength={50}
                value={data.name || ""}
                onChange={(e) => updateDataResults("name", e.target.value)}
                />
                <FaUser className="icon-form-main-name"/>
            </label>
        </div>

        <div className="main-input">
            <label>
                <span>Email</span>
                <input type="text"
                name="email"
                id="id-email"
                placeholder="Digite seu email..."
                required
                maxLength={50}
                value={data.email || ""}
                onChange={(e) => updateDataResults("email", e.target.value)}
                />
                <MdOutlineEmail className="icon-form-main-email"/>
            </label>
            <span className="email-feedback">Seu e-mail é importante para você receber o feedback oficial</span>
        </div>

    </div>

  )
}

export default FormMain