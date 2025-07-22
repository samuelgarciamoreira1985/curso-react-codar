import { useState, useEffect } from "react"

const endereco = "http://localhost:3000/products"

const Requestions = () => {

    const [produto, setProduto] = useState([])

    useEffect(() => {
        async function buscaDados() {
            const request = await fetch(endereco)
            const response = await request.json()
            setProduto(response)
        }
        buscaDados()
    },[])

  return (

    <div>
        <h1>Teste de Requisição</h1>
        <h2>Lista de produtos</h2>
        <ul>
            {produto.map((item) => (
                <li key={item.id}>{item.name} e {item.price}</li>
            ))}
        </ul>
    </div>

  )
}

export default Requestions