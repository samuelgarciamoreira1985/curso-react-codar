import { useState, useEffect } from "react"

const url = "http://localhost:3000/products"

const Requestions = () => {

  const [produto, setProduto] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    async function getProduto() {
      const request = await fetch(url)
      const response = await request.json()
      setProduto(response)
    }
    getProduto()
  },[])

  // Enviar POST
  const adicionarProduto = async (e) => {
    e.preventDefault()

    const listaProdutos = {
    name,
    price
  }

    const responseAdd = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(listaProdutos)
    })

    const resultadoFinal = await responseAdd.json()
    setProduto((prevProduto) => [...prevProduto,resultadoFinal])
  }

  return (

    <div>
        <h2>PRODUTOS</h2>
        <h4>LISTA DE PRODUTOS</h4>
        <ul>
          {produto.map((prod) => (
            <li key={prod.id}>{prod.name} - R${prod.price}</li>
          ))}
        </ul>
        <form onSubmit={adicionarProduto}>
          <label>
            <span>Produto: </span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            <span>Preço: </span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Enviar"/>
        </form>
    </div>

  )
}

export default Requestions