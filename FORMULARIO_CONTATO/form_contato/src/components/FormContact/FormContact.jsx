import { useState } from "react"
import "./FormContact.css"

const FormContact = () => {

    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userMessenger,setUserMessenger] = useState("")

    const submitData = (e) => {
        e.preventDefault()

        alert("Dados enviados com sucesso!" + " --Nome: " + userName + " --Email: " + userEmail + " --Mensagem: " + userMessenger)
    }

  return (

    <div id="main-container">
        <form className="form-container" onSubmit={submitData}>

            <h3>Por favor, envie seu contato!</h3>
            {/* inputs */}
            <div className="form-inputs">
                <label>
                    <span>Nome</span>
                    <input type="text" name="n-nameUser" id="id-nameUser" onChange={(e) => setUserName(e.target.value)} placeholder="Digite seu nome" required/>
                </label>
                <label>
                    <span>Endereço de Email</span>
                    <input type="email" name="n-email" id="id-email" onChange={(e) => setUserEmail(e.target.value)} placeholder="Digite seu email" required/>
                </label>
                <label>
                    <span>Mensagem</span>
                    <textarea name="n-messenger" id="id-messenger" onChange={(e) => setUserMessenger(e.target.value)} value={userMessenger} placeholder="Digite sua mensagem" required></textarea>
                </label>
            </div>
             {/* end inputs */}
                <button>Enviar</button>
            
            <div className="form-footer">
                <p> Você pode criar uma conta exclusiva <a href="#">clicando aqui</a> para receber descontos exclusivos.</p>
            </div>

        </form>
    </div>

  )
}

export default FormContact