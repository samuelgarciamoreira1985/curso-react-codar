import { useState, useEffect } from "react"

const url = "https://viacep.com.br/ws/01001000/json/"

const Requestions = () => {

    const [cep, setCep] = useState([])

    useEffect(() => {
        async function getCep() {
            const request = await fetch(url)
            const response = await request.json()
            setCep(response)
            
        }
        getCep()
        console.log(cep)
    },[])


  return (

    <div>
        <h2>Cep consultado</h2>
        
    </div>

  )
}

export default Requestions